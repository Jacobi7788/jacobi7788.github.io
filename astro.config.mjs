import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gzn154022632-prog.github.io',
  base: '/',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
