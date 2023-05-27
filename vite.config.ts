import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig(() => ({
	plugins: [
		sveltekit(),
		nodePolyfills({
			// Whether to polyfill `node:` protocol imports.
			protocolImports: true
		})
	],
	optimizeDeps: {
		include: ['algosdk', '@perawallet/connect'],
		esbuildOptions: {
			// Node.js global to browser globalThis https://github.com/perawallet/connect/issues/101#issuecomment-1468996145
			define: {
				'global.WebSocket': 'globalThis.WebSocket'
			}
		}
	}
}));
