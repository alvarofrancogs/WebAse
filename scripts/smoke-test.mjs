import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');

function fail(message) {
  console.error(`SMOKE FAIL: ${message}`);
  process.exit(1);
}

if (!fs.existsSync(indexPath)) {
  fail('dist/index.html was not generated');
}

const indexHtml = fs.readFileSync(indexPath, 'utf8');

const prerenderedRoutes = [
  '',
  'diseno-web-murcia',
  'desarrollo-web-murcia',
  'tienda-online-murcia',
  'mantenimiento-web-murcia',
  'precios-diseno-web-murcia',
  'pagina-web-para-empresas-murcia',
  'seo-local-murcia',
  'diseno-web-cartagena',
  'diseno-web-lorca',
  'diseno-web-molina-de-segura'
];

for (const route of prerenderedRoutes) {
  const htmlPath = path.join(distDir, route, 'index.html');
  if (!fs.existsSync(htmlPath)) fail(`prerendered HTML missing for /${route}`);
  const html = fs.readFileSync(htmlPath, 'utf8');
  for (const [label, pattern] of [
    ['H1', /<h1\b/i],
    ['hero', /<section\b/i],
    ['main', /<main\b/i],
    ['footer', /<footer\b/i],
    ['title', /<title>[^<]+<\/title>/i],
    ['description', /<meta\s+name="description"[^>]+content=/i],
    ['canonical', /<link\s+rel="canonical"[^>]+href=/i],
    ['OpenGraph', /<meta\s+property="og:title"/i],
    ['JSON-LD', /<script\s+type="application\/ld\+json"/i]
  ]) {
    if (!pattern.test(html)) fail(`${label} missing from /${route} HTML`);
  }
  const expectedUrl = `https://www.embercode.es/${route}`;
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
  const openGraphUrl = html.match(/<meta\s+property="og:url"\s+content="([^"]+)"/i)?.[1];
  if (canonical !== expectedUrl || openGraphUrl !== expectedUrl) {
    fail(`route metadata points to the wrong URL for /${route}`);
  }
}

const notFoundHtml = path.join(distDir, '404.html');
if (!fs.existsSync(notFoundHtml) || !fs.readFileSync(notFoundHtml, 'utf8').includes('noindex')) {
  fail('static noindex 404 page was not generated');
}

if (!indexHtml.includes('<app-root')) {
  fail('dist/index.html does not include <app-root>');
}

const mainBundleMatch = indexHtml.match(/main-[A-Za-z0-9]+\.js/);
if (!mainBundleMatch) {
  fail('main bundle reference was not found in dist/index.html');
}

const mainBundlePath = path.join(distDir, mainBundleMatch[0]);
if (!fs.existsSync(mainBundlePath)) {
  fail(`main bundle ${mainBundleMatch[0]} does not exist in dist`);
}

const mainBundleStats = fs.statSync(mainBundlePath);
if (mainBundleStats.size < 1024) {
  fail('main bundle size is unexpectedly small');
}

const recaptchaUrl = 'https://www.google.com/recaptcha/api.js';
if (indexHtml.includes(recaptchaUrl)) {
  fail('reCAPTCHA must not load from dist/index.html');
}

const hasLazyRecaptchaLoader = fs.readdirSync(distDir)
  .filter((file) => /^chunk-[A-Za-z0-9]+\.js$/.test(file))
  .some((file) => fs.readFileSync(path.join(distDir, file), 'utf8').includes(recaptchaUrl));
if (!hasLazyRecaptchaLoader) {
  fail('reCAPTCHA loader was not found in a lazy chunk');
}

console.log(`SMOKE PASS: ${prerenderedRoutes.length} prerendered routes, 404, assets and runtime entrypoints are valid.`);
