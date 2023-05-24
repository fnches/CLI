import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import notifier from 'vite-plugin-notifier';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	plugins:
		mode === 'development'
			? [
					sveltekit(),
					notifier(),
					nodePolyfills({
						// Whether to polyfill `node:` protocol imports.
						protocolImports: true
					})
			  ]
			: [],
	server: {
		port: 4020
	},
	optimizeDeps: {
		esbuildOptions: {
			// Node.js global to browser globalThis
			define: {
				global: 'globalThis'
			}
		}
	}
}));
