# Release Checklist

## Pre-deploy

1. Install dependencies with `npm install`.
2. Run type checks with `npm run lint`.
3. Run smoke tests with `npm test`.
4. Verify production bundle with `npm run build`.
5. Review `npm audit --omit=dev` and confirm there are no high vulnerabilities.

## Runtime verification

1. Open the built site and validate hero, services, process, faq, and contact sections.
2. Confirm reCAPTCHA loads and resolves on a normal network.
3. Submit contact form twice in a row and verify both submissions carry a valid token.
4. Test on mobile for menu open/close and scroll behavior.
5. Test unknown route behavior and ensure only unsupported paths show 404.

## Deploy

1. Publish `dist/` to hosting provider.
2. Confirm HTTPS and custom domain are active.
3. Re-run smoke test against production URL.
4. Monitor client-side errors for first 24 hours.
