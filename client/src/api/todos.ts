import type { TodoType } from '@/types';
import { getData, URLS } from './baseApi';

export async function getTodos(signal: AbortSignal) {
	return getData<TodoType[]>(signal, URLS.todos);
}

export async function getUserTodos(signal: AbortSignal, userId: string) {
	return getData<TodoType[]>(signal, `${URLS.todos}/?userId=${userId}`);
}
