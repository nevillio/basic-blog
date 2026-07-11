import { getData, URLS } from '../../api.ts';
import Users from './Users.tsx';

export const UsersRoute = {
	loader: ({ request: { signal } }) => getData(signal, URLS.users),
	element: <Users />,
};
