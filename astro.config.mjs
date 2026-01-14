// @ts-check
import { defineConfig } from 'astro/config';
import { astroPrerenderIntegration } from 'vite-plugin-astro-prerender';

// https://astro.build/config
export default defineConfig({
    site: 'https://ishaanparlikar.github.io',
    base: '/astro-lazy-plugin-demo',
    integrations: [
        astroPrerenderIntegration({
            componentsDir: 'src/components/Lazy',
            outputDir: 'public/prerendered',
            generateTailwindCSS: false,
            renderer: "container",
        }),
    ],
});
