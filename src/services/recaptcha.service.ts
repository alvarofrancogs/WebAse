import { Injectable } from '@angular/core';

interface GrecaptchaApi {
    render: (container: string | HTMLElement, parameters: object) => number;
    getResponse: (widgetId?: number) => string;
    reset: (widgetId?: number) => void;
}

interface RecaptchaRenderOptions {
    timeoutMs?: number;
    retryIntervalMs?: number;
    maxRetries?: number;
}

@Injectable({
    providedIn: 'root'
})
export class RecaptchaService {
    readonly SITE_KEY = '6Lf_XVosAAAAAM4_80520jXf4d_Ql8LsBnJu9uP2';

    private widgetId: number | null = null;
    private scriptPromise: Promise<boolean> | null = null;

    async render(
        containerId: string,
        callback: (token: string) => void,
        expiredCallback: () => void,
        errorCallback?: () => void,
        options: RecaptchaRenderOptions = {}
    ): Promise<boolean> {
        const container = document.getElementById(containerId);
        if (!container) {
            return false;
        }
        if (this.widgetId !== null && container.querySelector('iframe')) {
            return true;
        }
        this.widgetId = null;

        const timeoutMs = options.timeoutMs ?? 12_000;
        const retryIntervalMs = options.retryIntervalMs ?? 250;
        const maxRetries = options.maxRetries ?? 2;

        for (let attempt = 0; attempt <= maxRetries; attempt++) {
            if (!await this.loadScript(timeoutMs, retryIntervalMs)) {
                continue;
            }
            if (!document.getElementById(containerId)) {
                return false;
            }
            const api = this.getApi();
            if (!api) {
                continue;
            }

            try {
                this.widgetId = api.render(containerId, {
                    sitekey: this.SITE_KEY,
                    theme: 'dark',
                    callback,
                    'expired-callback': expiredCallback,
                    'error-callback': errorCallback
                });
                return true;
            } catch {
                this.widgetId = null;
            }

            await this.sleep(retryIntervalMs);
        }

        return false;
    }

    getResponse(): string {
        const api = this.getApi();
        if (api && this.widgetId !== null) {
            return api.getResponse(this.widgetId);
        }

        return '';
    }

    reset(): void {
        const api = this.getApi();
        if (api && this.widgetId !== null) {
            api.reset(this.widgetId);
        }
    }

    private getApi(): GrecaptchaApi | null {
        const globalScope = globalThis as { grecaptcha?: GrecaptchaApi };
        const api = globalScope.grecaptcha;

        if (!api) {
            return null;
        }

        if (typeof api.render !== 'function' || typeof api.getResponse !== 'function' || typeof api.reset !== 'function') {
            return null;
        }

        return api;
    }

    private async loadScript(timeoutMs: number, retryIntervalMs: number): Promise<boolean> {
        if (this.getApi()) {
            return true;
        }
        if (!this.scriptPromise) {
            this.scriptPromise = new Promise<boolean>((resolve) => {
                const script = document.createElement('script');
                script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
                script.async = true;
                script.defer = true;
                script.onload = async () => resolve(!!await this.waitForApi(timeoutMs, retryIntervalMs));
                script.onerror = () => resolve(false);
                document.head.appendChild(script);
            });
        }
        const loaded = await this.scriptPromise;
        if (!loaded) {
            document.querySelector('script[src*="/recaptcha/api.js"]')?.remove();
            this.scriptPromise = null;
        }
        return loaded;
    }

    private async waitForApi(timeoutMs: number, retryIntervalMs: number): Promise<GrecaptchaApi | null> {
        const start = Date.now();

        while (Date.now() - start < timeoutMs) {
            const api = this.getApi();
            if (api) {
                return api;
            }

            await this.sleep(retryIntervalMs);
        }

        return null;
    }

    private sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
