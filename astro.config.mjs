// @ts-check
import { FontaineTransform } from 'fontaine';
const fontaineConfig = {
    fallbacks: {
        Recursive: ['Inter', 'Roboto', 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', 'Arial'],
        RecursiveMono: ['Nimbus Mono PS', 'Courier New']
    },
    resolvePath: (id) => new URL(`./public${id}`, import.meta.url)
}
import { defineConfig, fontProviders } from 'astro/config';

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
    fonts: [{
        provider: fontProviders.local(),
        name: "Recursive",
        cssVariable: "--font-recursive",
        options: {
            variants: [
                {
                    weight: "300 1000",
                    style: "normal",
                    src: ["./src/assets/fonts/recursive.woff2"],
                }
            ]
        }
    },
{
        provider: fontProviders.local(),
        name: "Recursive",
        cssVariable: "--font-recursive-mono",
        fallbacks: ["monospace"],
        options: {
            variants: [
                {
                    weight: "300 1000",
                    style: "normal",
                    src: ["./src/assets/fonts/recursive.woff2"],
                }
            ]
        }
    }],

    vite: {
        css: {
            transformer: "lightningcss",
        },
    },

    markdown: {
        // @ts-ignore
        remarkPlugins: [remarkAbbr, remarkDirective, [remarkSmartypants, { dashes: "oldschool" }]],
        rehypePlugins: [
            [rehypeExternalLinks, {
                rel: ["noreferrer", "nofollow", "noopener", "external"]
            }]
        ]
    },

    image: {
        responsiveStyles: true,
        layout: 'constrained'
    }
});