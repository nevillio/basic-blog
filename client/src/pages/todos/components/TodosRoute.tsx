import { getTodos } from '@/api/todos.ts';
import type { LoaderParams } from '@/types.ts';
import Todos from '../Todos.tsx';

export const TodosRoute = {
	loader: ({ request: { signal } }: LoaderParams) => getTodos(signal),
	element: <Todos />,
};
