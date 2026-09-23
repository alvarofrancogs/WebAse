import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface SeoData {
    title: string;
    description: string;
    canonicalPath: string;
    ogType?: string;
    jsonLd?: object | object[];
    geo?: {
        region?: string;
        placename?: string;
        position?: string;
    };
}

const BASE_URL = 'https://www.embercode.es';

@Injectable({ providedIn: 'root' })
export class SeoService {
    constructor(@Inject(DOCUMENT) private doc: Document) { }

    update(data: SeoData): void {
        this.setTitle(data.title);
        this.setMeta('description', data.description);
        this.setCanonical(data.canonicalPath);

        // OG
        this.setMetaProperty('og:title', data.title);
        this.setMetaProperty('og:description', data.description);
        this.setMetaProperty('og:url', `${BASE_URL}${data.canonicalPath}`);
        this.setMetaProperty('og:type', data.ogType ?? 'website');
        this.setMetaProperty('og:locale', 'es_ES');
        this.setMetaProperty('og:site_name', 'EmberCode Web Studio');

        // Twitter
        this.setMeta('twitter:card', 'summary_large_image');
        this.setMeta('twitter:title', data.title);
        this.setMeta('twitter:description', data.description);

        // Geo
        if (data.geo) {
            this.setMeta('geo.region', data.geo.region ?? 'ES-MU');
            if (data.geo.placename) {
                this.setMeta('geo.placename', data.geo.placename);
            }
            if (data.geo.position) {
                this.setMeta('geo.position', data.geo.position);
                this.setMeta('ICBM', data.geo.position.replace(';', ', '));
            }
        }

        // JSON-LD
        if (data.jsonLd) {
            this.setJsonLd(data.jsonLd);
        }
    }

    private setTitle(title: string): void {
        this.doc.title = title;
    }

    private setMeta(name: string, content: string): void {
        let el = this.doc.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
        if (!el) {
            el = this.doc.createElement('meta');
            el.setAttribute('name', name);
            this.doc.head.appendChild(el);
        }
        el.setAttribute('content', content);
    }

    private setMetaProperty(property: string, content: string): void {
        let el = this.doc.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
        if (!el) {
            el = this.doc.createElement('meta');
            el.setAttribute('property', property);
            this.doc.head.appendChild(el);
        }
        el.setAttribute('content', content);
    }

    private setCanonical(path: string): void {
        const url = `${BASE_URL}${path}`;
        let el = this.doc.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!el) {
            el = this.doc.createElement('link');
            el.setAttribute('rel', 'canonical');
            this.doc.head.appendChild(el);
        }
        el.setAttribute('href', url);
    }

    private setJsonLd(data: object | object[]): void {
        // Remove any existing JSON-LD
        this.doc.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());

        const schemas = Array.isArray(data) ? data : [data];
        for (const schema of schemas) {
            const script = this.doc.createElement('script');
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(schema);
            this.doc.head.appendChild(script);
        }
    }
}
