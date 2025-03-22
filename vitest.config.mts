import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			provider: 'v8',
			reporter: ['json-summary', 'text', 'json'],
			reportsDirectory: './coverage/vitest',
		},
	},
});
