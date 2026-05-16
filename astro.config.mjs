// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: "https://henrysprojects.uk",
	vite: {
		plugins: [tailwindcss()]
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Lato",
			cssVariable: "--font-default"
		},
		{
			provider: fontProviders.google(),
			name: "Inter",
			cssVariable: "--font-display",
			weights: [700]
		}]
});