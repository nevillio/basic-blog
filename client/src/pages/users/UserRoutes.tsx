import { getUserPosts } from '@/api/posts.ts';
import { getUserTodos } from '@/api/todos.ts';
import { getUser, getUsers } from '@/api/users.ts';
import type { LoaderParams } from '@/types.ts';
import { User } from './User.tsx';
import Users from './Users.tsx';

export const UsersRoute = {
	loader: ({ request: { signal } }: LoaderParams) => getUsers(signal),
	element: <Users />,
};

export const UserRoute = {
	loader: async ({ request: { signal }, params }: LoaderParams) => {
		const [userData, posts, todos] = await Promise.all([
			getUser(signal, params!.userId),
			getUserPosts(signal, params.userId),
			getUserTodos(signal, params.userId),
		]);

		return { ...userData, posts, todos };
	},
	element: <User />,
};
