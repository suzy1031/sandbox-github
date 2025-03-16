import { describe, it, expect, vi, beforeEach } from 'vitest';
import { chohan } from '../src/chohan';
import * as seedModule from '../src/seed';

vi.mock('./seed', () => ({
	seed: vi.fn(),
}));

describe('chohan', () => {
	beforeEach(() => {
		vi.resetAllMocks();
	});
	it('should return "丁" when seed returns an even number', () => {
		vi.spyOn(seedModule, 'seed').mockReturnValue(4);
		expect(chohan()).toBe('丁');
	});

	it('should return "半" when seed returns an odd number', () => {
		vi.spyOn(seedModule, 'seed').mockReturnValue(3);
		expect(chohan()).toBe('半');
	});
});
