import { Injectable } from '@angular/core';

declare const grecaptcha: {
    render: (container: string | HTMLElement, parameters: object) => number;
    getResponse: (widgetId?: number) => string;
    reset: (widgetId?: number) => void;
};

@Injectable({
    providedIn: 'root'
})
export class RecaptchaService {
    // Site Key de reCAPTCHA v2
    readonly SITE_KEY = '6Lf_XVosAAAAAM4_80520jXf4d_Ql8LsBnJu9uP2';

    private widgetId: number | null = null;

    /**
     * Renderiza el widget de reCAPTCHA v2 en el contenedor especificado.
     * @param containerId ID del elemento HTML donde renderizar el captcha
     * @param callback Función a ejecutar cuando el usuario resuelve el captcha
     * @param expiredCallback Función a ejecutar cuando el captcha expira
     */
    render(containerId: string, callback: (token: string) => void, expiredCallback: () => void): void {
        if (typeof grecaptcha !== 'undefined' && this.widgetId === null) {
            this.widgetId = grecaptcha.render(containerId, {
                sitekey: this.SITE_KEY,
                theme: 'dark',
                callback: callback,
                'expired-callback': expiredCallback
            });
        }
    }

    /**
     * Obtiene el token de respuesta del captcha resuelto.
     * @returns El token g-recaptcha-response o cadena vacía si no está resuelto
     */
    getResponse(): string {
        if (typeof grecaptcha !== 'undefined' && this.widgetId !== null) {
            return grecaptcha.getResponse(this.widgetId);
        }
        return '';
    }

    /**
     * Resetea el widget después de un envío.
     */
    reset(): void {
        if (typeof grecaptcha !== 'undefined' && this.widgetId !== null) {
            grecaptcha.reset(this.widgetId);
            this.widgetId = null;
        }
    }
}
