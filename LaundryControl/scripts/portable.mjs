import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
let html = readFileSync('dist/index.html', 'utf8');
html = html.replace(/<script\b[^>]*src="([^"]+)"[^>]*><\/script>/g, (_, src) => {
  const js = readFileSync(resolve('dist', src), 'utf8').replace(/<\/script/gi, '<\\/script');
  return `<script type="module">${js}</script>`;
});
html = html.replace(/<link\b[^>]*href="([^"]+\.css)"[^>]*>/g, (_, src) => `<style>${readFileSync(resolve('dist', src), 'utf8')}</style>`);
writeFileSync('ABRIR-LaundryControl.html', html);
console.log('Creado ABRIR-LaundryControl.html');
