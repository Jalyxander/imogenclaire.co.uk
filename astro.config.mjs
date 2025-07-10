import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://imogenclaire.co.uk',
  output: 'static',
  build: {
    assets: 'assets'
  }
});