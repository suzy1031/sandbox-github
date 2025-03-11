import { chohan } from './chohan';

jest.mock('./seed', () => {
	return {
		seed: jest
			.fn()
			.mockImplementationOnce(() => 2)
			.mockImplementationOnce(() => 1),
	};
});

describe('chohan', () => {
	it('returns 丁 when seed returns as even number like 2', () => {
		expect(chohan()).toBe('丁');
	});
	it('returns 半 when seed returns as odd number like 1', () => {
		expect(chohan()).toBe('半');
	});
});
