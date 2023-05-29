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
		//these both throw a once off error if not cached in advance - https://github.com/cypress-io/cypress/issues/18124#issuecomment-1016534802
		include: ['algosdk', '@perawallet/connect'],
		esbuildOptions: {
			// Node.js global to browser globalThis https://github.com/perawallet/connect/issues/101#issuecomment-1468996145
			define: {
				'global.WebSocket': 'globalThis.WebSocket'
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}));
