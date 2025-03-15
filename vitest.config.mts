import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		root: 'src',
		environment: 'jsdom',
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
		},
	},
});
