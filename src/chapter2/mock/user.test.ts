import axios from 'axios';
import type { AxiosStatic } from 'axios';
import Users from './users';
import { vi, test, expect } from 'vitest';
import type { Mocked } from 'vitest';

vi.mock('axios');

// ref: https://qiita.com/mori_goq/items/a99f75ce29098a59df60
test('should fetch all users', async () => {
	const users = [{ name: 'Bob' }];
	const resp = { data: users };

	const mockedAxios = axios as Mocked<AxiosStatic>;

	mockedAxios.get.mockResolvedValue(resp);
	// axios.get.mockImplementation(() => Promise.resolve(resp)); // 同じ設定

	await expect(Users.search()).resolves.toEqual(users);
});
