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

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import rehypeExternalLinks from 'rehype-external-links';
import remarkAbbr from '@syenchuk/remark-abbr'
import remarkSmartypants from "remark-smartypants";

import aiRobotsTxt from 'astro-ai-robots-txt';

// https://astro.build/config
export default defineConfig({
    experimental: {
        preserveScriptOrder: true
    },
    site: 'https://lowercase.name',
    integrations: [mdx(), sitemap(), aiRobotsTxt()],

    vite: {
        plugins: [
            FontaineTransform.vite(fontaineConfig)],
        css: {
            transformer: "lightningcss",
        },
    },

    markdown: {
        // @ts-ignore
        remarkPlugins: [remarkAbbr, [remarkSmartypants, { dashes: "oldschool" }]],
        rehypePlugins: [
            rehypeExternalLinks
        ]
    },
});