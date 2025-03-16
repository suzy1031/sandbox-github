import { test, expect } from 'vitest';
import { sum } from '../src/sum';

test('1 + 2 equals 3', () => {
	expect(sum(1, 2)).toBe(3);
});
