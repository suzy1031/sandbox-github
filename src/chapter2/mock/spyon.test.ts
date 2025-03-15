import { describe, afterEach, it, vi, expect } from 'vitest';
import type { MockInstance } from 'vitest';
describe('Math random with spyOn', () => {
	let spy: MockInstance;

	afterEach(() => {
		spy.mockRestore();
		// jest.restoreAllMocks()
	});

	it('Math.random return 1', () => {
		spy = vi.spyOn(Math, 'random').mockImplementation(() => 1);
		expect(Math.random()).toBe(1);
	});

	it('Math.random return under 1', () => {
		expect(Math.random()).toBeLessThan(1);
	});
});
