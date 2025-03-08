describe('Math random with spyOn', () => {
	let spy: jest.SpyInstance;

	afterEach(() => {
		spy.mockRestore();
		// jest.restoreAllMocks()
	});

	it('Math.random return 1', () => {
		spy = jest.spyOn(Math, 'random').mockImplementation(() => 1);
		expect(Math.random()).toBe(1);
	});

	it('Math.random return under 1', () => {
		expect(Math.random()).toBeLessThan(1);
	});
});
