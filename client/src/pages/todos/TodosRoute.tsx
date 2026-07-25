import { getData, URLS } from '@/api.ts';
import type { LoaderParams, TodoType } from '@/types.ts';
import Todos from './Todos.tsx';

export const TodosRoute = {
	loader: ({ request: { signal } }: LoaderParams) =>
		getData<TodoType[]>(signal, URLS.todos),
	element: <Todos />,
};
