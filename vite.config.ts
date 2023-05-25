import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig(() => ({
	plugins: [
		sveltekit(),
		basicSsl(),
		nodePolyfills({
			// Whether to polyfill `node:` protocol imports.
			protocolImports: true
		})
	],
	server: {
		hmr: {
			host: 'localhost',
			protocol: 'ws'
		}
	},
	optimizeDeps: {
		esbuildOptions: {
			// Node.js global to browser globalThis
			define: {
				'global.WebSocket': 'globalThis.WebSocket'
			}
		}
	}
}));
