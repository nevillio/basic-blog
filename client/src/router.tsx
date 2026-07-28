import { createBrowserRouter, Navigate } from 'react-router';
import App from '@/App';
import ErrorElement from '@/ErrorPage';
import { PostRoute, PostsRoute } from '@/pages/posts/components/PostRoutes.tsx';
import { TodosRoute } from '@/pages/todos/components/TodosRoute.tsx';
import { UserRoute, UsersRoute } from '@/pages/users/components/UserRoutes.tsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				errorElement: <ErrorElement />,
				children: [
					{
						index: true,
						element: <Navigate to='/posts' />,
					},
					{
						path: 'posts',
						children: [
							{ index: true, ...PostsRoute },
							{ path: ':postId', ...PostRoute },
						],
					},
					{
						path: 'users',
						children: [
							{ index: true, ...UsersRoute },
							{ path: ':userId', ...UserRoute },
						],
					},
					{
						path: 'todos',
						children: [{ index: true, ...TodosRoute }],
					},
					{
						path: '*',
						element: <h1>404 - Page Not Found</h1>,
					},
				],
			},
		],
	},
]);
