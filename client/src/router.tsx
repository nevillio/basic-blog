import { createBrowserRouter, Navigate } from 'react-router';
import App from './App.tsx';
import { PostRoute, PostsRoute } from './pages/posts/PostRoutes.tsx';
import { TodosRoute } from './pages/todos/TodosRoute.tsx';
import { UserRoute, UsersRoute } from './pages/users/UserRoutes.tsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <h1>Page not found</h1>,
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
		],
	},
]);
