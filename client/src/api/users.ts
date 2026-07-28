import type { UserType } from '@/types';
import { getData, URLS } from './baseApi';

export async function getUsers(signal: AbortSignal) {
	return getData<UserType[]>(signal, URLS.users);
}

export async function getUser(signal: AbortSignal, id: string) {
	return getData<UserType>(signal, `${URLS.users}/${id}`);
}
