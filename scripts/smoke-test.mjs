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

if (!indexHtml.includes('https://www.google.com/recaptcha/api.js')) {
  fail('reCAPTCHA script tag is missing from dist/index.html');
}

console.log('SMOKE PASS: dist assets and runtime entrypoints are valid.');
