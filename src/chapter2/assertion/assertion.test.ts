import { it } from 'node:test';
import { test, expect } from 'vitest';
const numberValue = 0;
const stringValue = '文字列';
const booleanValue = true;

test('evaluates as equal for all the same primitive values when using the toBe function', () => {
	expect(numberValue).toBe(0);
	expect(stringValue).toBe('文字列');
	expect(booleanValue).toBe(true);
});

test('evaluates as equal for all the same primitive values when using the toStrictEqual function', () => {
	expect(numberValue).toStrictEqual(0);
	expect(stringValue).toStrictEqual('文字列');
	expect(booleanValue).toStrictEqual(true);
});

test('evaluates as equal for all the same primitive values when using the toEqual function', () => {
	expect(numberValue).toEqual(0);
	expect(stringValue).toEqual('文字列');
	expect(booleanValue).toEqual(true);
});

type CanType = {
	flavor: string;
	ounces: number;
};

const can1: CanType = {
	flavor: 'grapefruit',
	ounces: 12,
};

const can2: CanType = {
	flavor: 'grapefruit',
	ounces: 12,
};

const can3: CanType = can2;

class Can {
	flavor: string;
	ounces: number;

	constructor({ flavor, ounces }: CanType) {
		this.flavor = flavor;
		this.ounces = ounces;
	}
}

const can4 = new Can({
	flavor: 'grapefruit',
	ounces: 12,
});

test('can1 and can2 are not the exact same instance', () => {
	expect(can1).not.toBe(can2);
});

test('can2 and can3 are the same instance', () => {
	expect(can2).toBe(can3);
});

test('can1 and can2 have the same properties', () => {
	expect(can1).toEqual(can2);
});

test('can2 and can4 have the same properties', () => {
	expect(can2).toEqual(can4);
});

test('can2 and can4 are different class', () => {
	expect(can2).not.toStrictEqual(can4);
	expect(can2.constructor.name).not.toEqual(can4.constructor.name);
});

test('differences between toEqual and toStrictEqual', () => {
	// toEqual: undefinedを持つプロパティが無視されるので、等しいと評価される
	expect({ foo: Number.NaN, bar: undefined }).toEqual({ foo: Number.NaN });

	// toStrictEqual: undefinedを持つプロパティもチェックされるので、等しくないと評価される
	expect({ foo: Number.NaN, bar: undefined }).not.toStrictEqual({
		foo: Number.NaN,
	});

	// toEqual: 未定義の要素とundefinedの要素を区別しないので、、等しいと評価される
	// biome-ignore lint/suspicious/noSparseArray: <explanation>
	expect([, undefined, 1]).toEqual([undefined, , 1]);

	// toStrictEqual: 未定義の要素とundefinedの要素を区別するので、等しくないと評価される
	// biome-ignore lint/suspicious/noSparseArray: <explanation>
	expect([, undefined, 1]).not.toStrictEqual([undefined, , 1]);
});

test('"0" should be Truthy', () => {
	expect('0').toBeTruthy();
});

test('0 should be Falsy', () => {
	expect(0).toBeFalsy();
});

const hoge = () => ({ hoge: 'hogehoge', number: 0 });

test('hoge return anything', () => {
	expect(hoge()).toEqual(expect.anything());

	expect(hoge()).toEqual({
		hoge: 'hogehoge',
		number: expect.any(Number),
	});
});

test('0.1 + 0.2 return 0.3', () => {
	expect(0.1 + 0.2).toBeCloseTo(0.3);
});

test('0.301 and 0.3 are different when numDigits is 3', () => {
	// 小数点以下3桁目まで評価する場合、0.3と0.301は等しくないと評価する
	expect(0.3 + 0.001).not.toBeCloseTo(0.3, 3);
});

const log1 =
	'10.0.0.3 - - [30/Jan/2023:12:20:12 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"';
const log2 =
	'10.0.0.11 - - [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"';
const log3 =
	'10.0.0.99 - - [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"';

test('contains 10.0.0.3 IP address', () => {
	expect(log1).toEqual(expect.stringContaining('10.0.0.3'));
});

test('contain IP address between 10.0.0.0 and 10.0.0.9', () => {
	const expected = /^10.0.0.([1-9]?[0-9]) /;

	expect(log1).toEqual(expect.stringMatching(expected));
	expect(log2).toEqual(expect.stringMatching(expected));
	expect(log3).toEqual(expect.stringMatching(expected));

	expect(log1).toMatch(expected);
	expect(log2).toMatch(expected);
	expect(log3).toMatch(expected);

	const regex = new RegExp(expected);
	expect(regex.test(log1)).toBe(true);
	expect(regex.test(log2)).toBe(true);
	expect(regex.test(log3)).toBe(true);
});

const fruitList = ['Apple', 'Lemon', 'Orange'];

test('contains Apple in fruitList', () => {
	expect(fruitList).toContain('Apple');
});

test('contains Apple and Orange in fruitList', () => {
	expect(fruitList).toEqual(expect.arrayContaining(['Apple', 'Orange']));
});

const itemList = [
	{ name: 'Apple', price: 100 },
	{ name: 'Lemon', price: 150 },
	{ name: 'Orange', price: 120 },
];

test('contains Apple in itemList', () => {
	expect(itemList).toContainEqual({ name: 'Apple', price: 100 });
});

test('contains Apple and Orange in itemList', () => {
	expect(itemList).toEqual(
		expect.arrayContaining([
			{ name: 'Apple', price: 100 },
			{ name: 'Orange', price: 120 },
		]),
	);
});

const ciBuild = {
	number: 1,
	duration: 12000,
	state: 'success',
	triggerParameters: {
		is_scheduled: true,
	},
	type: 'scheduled_pipeline',
	actor: {
		login: 'Taka',
	},
};

test('build state should be success', () => {
	expect(ciBuild).toHaveProperty('state', 'success');
});

test('actor should be Taka', () => {
	expect(ciBuild).toHaveProperty('actor.login', 'Taka');
});

test('triggered by the scheduled pipeline', () => {
	expect(ciBuild).toEqual(
		expect.objectContaining({
			triggerParameters: expect.objectContaining({ is_scheduled: true }),
			type: 'scheduled_pipeline',
		}),
	);
});

const fetchDataWithCallback = callback => {
	setTimeout(callback, 3000, 'lemon');
};

// https://vitest.dev/guide/migration.html#done-callback
test('return lemon', () =>
	new Promise(done => {
		const callback = data => {
			expect(data).toBe('lemon');
			done(data);
		};
		fetchDataWithCallback(callback);
	}));

const fetchDataWithPromiseResolve = () =>
	new Promise(resolve => setTimeout(resolve, 1000, 'lemon'));

test('return lemon', () => {
	return expect(fetchDataWithPromiseResolve()).resolves.toBe('lemon');
});

test('return lemon with async/await', async () => {
	await expect(fetchDataWithPromiseResolve()).resolves.toBe('lemon');
});

const fetchDataWithPromiseReject = () =>
	new Promise((resolve, reject) =>
		setTimeout(reject, 1000, new Error('lemon does not exist')),
	);

test('failed to return lemon', () => {
	return expect(fetchDataWithPromiseReject()).rejects.toThrow(
		'lemon does not exist',
	);
});

test('failed to return lemon', async () => {
	await expect(fetchDataWithPromiseReject()).rejects.toThrow(
		'lemon does not exist',
	);
});
