import { getData, URLS } from '../../api.ts';
import Todos from './Todos.tsx';

export const TodosRoute = {
	loader: ({ request: { signal } }) => getData(signal, URLS.todos),
	element: <Todos />,
};
