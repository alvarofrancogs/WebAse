import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface ContactFormData {
    email: string;
    message: string;
    recaptchaToken?: string;
}

@Injectable({
    providedIn: 'root'
})
export class MailerService {
    private http = inject(HttpClient);

    private readonly EMAILJS_SERVICE_ID = 'service_4cps3rn';
    private readonly EMAILJS_TEMPLATE_ID = 'template_beoxjgh';
    private readonly EMAILJS_PUBLIC_KEY = 'z8Buyk8Zhk8yaw8Ka';

    sendContactEmail(data: ContactFormData): Observable<boolean> {
        const payload = {
            service_id: this.EMAILJS_SERVICE_ID,
            template_id: this.EMAILJS_TEMPLATE_ID,
            user_id: this.EMAILJS_PUBLIC_KEY,
            template_params: {
                to_email: 'contacto@embercode.es',
                from_email: data.email,
                message: data.message,
                'g-recaptcha-response': data.recaptchaToken || ''
            }
        };

        return this.http.post('https://api.emailjs.com/api/v1.0/email/send', payload, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: 'text'
        }).pipe(
            map(() => {
                console.log('Email enviado correctamente');
                return true;
            }),
            catchError((error) => {
                console.error('Error EmailJS:', error);
                return of(false);
            })
        );
    }
}

