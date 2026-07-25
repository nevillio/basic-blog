import { getData, URLS } from '@/api.ts';
import type { LoaderParams, PostType, TodoType, UserType } from '@/types.ts';
import { User } from './User.tsx';
import Users from './Users.tsx';

export const UsersRoute = {
	loader: ({ request: { signal } }: LoaderParams) => getData<UserType[]>(signal, URLS.users),
	element: <Users />,
};

export const UserRoute = {
	loader: async ({ request: { signal }, params }: LoaderParams) => {
		const [userData, posts, todos] = await Promise.all([
			getData<UserType>(signal, URLS.users, params!.userId),
			getData<PostType[]>(signal, URLS.posts),
			getData<TodoType[]>(signal, URLS.todos),
		]);

		const userPosts = posts.filter(
			({ userId }) => userId.toString() === params!.userId,
		);
		const userTodos = todos.filter(
			({ userId }) => userId.toString() === params!.userId,
		);
		return { ...userData, posts: userPosts, todos: userTodos };
	},
	element: <User />,
};
