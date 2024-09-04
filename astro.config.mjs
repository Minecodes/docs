import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.minecodes.de",
	base: "/",
	integrations: [
		starlight({
			title: 'Docs',
			social: {
				github: 'https://github.com/Minecodes/docs',
			},
			plugins: [
				starlightImageZoom({
					showCaptions: true,
				}),
			],
			sidebar: [
				{
					label: 'Docs',
					autogenerate: { directory: 'docs' },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Acer Chromebook 314', slug: 'guides/acercb314' },
					],
				}	
			],
		}),
	],
});
