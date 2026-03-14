// @ts-check
import { FontaineTransform } from 'fontaine';
const fontaineConfig = {
    fallbacks: {
        RecursiveSans: ['Inter', 'Roboto', 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', 'Arial'],
        RecursiveMono: ['Nimbus Mono PS', 'Courier New']
    },
    resolvePath: (id) => new URL(`./public${id}`, import.meta.url)
}
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import rehypeExternalLinks from 'rehype-external-links';
import remarkAbbr from '@syenchuk/remark-abbr'
import remarkSmartypants from "remark-smartypants";
import remarkDirective from "remark-directive";

import mailObfuscation from 'astro-mail-obfuscation';

// https://astro.build/config
export default defineConfig({
    site: 'https://lowercase.name',
    integrations: [sitemap(), mailObfuscation()],

    vite: {
        plugins: [
            FontaineTransform.vite(fontaineConfig)],
        css: {
            transformer: "lightningcss",
        },
    },

    markdown: {
        // @ts-ignore
        remarkPlugins: [remarkAbbr, remarkDirective, [remarkSmartypants, { dashes: "oldschool" }]],
        rehypePlugins: [
            rehypeExternalLinks
        ]
    },
});