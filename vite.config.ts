import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import inject from '@rollup/plugin-inject';
import nodePolyfills from 'rollup-plugin-polyfill-node';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	// Node.js global to browser globalThis

	plugins: [sveltekit(), inject({ util: 'util/' })],
	build: {
		rollupOptions: { plugins: [nodePolyfills()] },
		commonjsOptions: { transformMixedEsModules: true }
	},
	optimizeDeps: {
		esbuildOptions: {
			// Node.js global to browser globalThis
			define: {
				global: 'globalThis'
			},
			// Enable esbuild polyfill plugins
			plugins: [
				NodeGlobalsPolyfillPlugin({
					buffer: true
				})
			]
		}
	}
});
