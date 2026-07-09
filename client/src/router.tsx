import { createBrowserRouter, Navigate } from 'react-router';
import App from './App.tsx';
import { PostsRoute } from './pages/posts/PostsRoute.tsx';
import { PostRoute } from './pages/posts/post/PostRoute.tsx';
import { Todos } from './pages/Todos.tsx';
import { Users } from './pages/Users.tsx';

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
			{ path: '/users', element: <Users /> },
			{ path: '/todos', element: <Todos /> },
		],
	},
]);
