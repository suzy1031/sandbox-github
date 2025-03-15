import { describe, test, expect, vi } from 'vitest';
describe('jest.fn()', () => {
	test('mock object specification', () => {
		const mockFunction = vi.fn();

		expect(mockFunction('foo', 'bar')).toBe(undefined);

		expect(mockFunction).toHaveProperty('mock');

		expect(mockFunction.mock).toHaveProperty('calls');

		expect(mockFunction.mock.calls).toHaveLength(1);

		expect(mockFunction.mock.calls[0]).toEqual(['foo', 'bar']);

		expect(mockFunction.mock).toHaveProperty('results');

		expect(mockFunction.mock.results).toHaveLength(1);

		expect(mockFunction.mock.results[0].value).toBe(undefined);

		expect(mockFunction.mock.results[0].type).toBe('return');
	});
});

test('return Hello', () => {
	const mockFunction = vi.fn(() => 'Hello');
	// const mockFunction = jest.fn().mockImplementation(() => 'Hello'); // 上記と同じ設定
	expect(mockFunction()).toBe('Hello');
});

test('return Hello once then it returns Goodbye', () => {
	const mockFunction = vi
		.fn()
		.mockImplementationOnce(() => 'Hello')
		.mockImplementationOnce(() => 'Goodbye');

	expect(mockFunction()).toBe('Hello');
	expect(mockFunction()).toBe('Goodbye');
	expect(mockFunction()).toBe(undefined);
});
