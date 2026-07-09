import { getData, URLS } from '../../api.ts';
import { Posts } from './Posts.tsx';

const loader = ({ request: { signal } }) => getData(signal, URLS.posts);

export const PostsRoute = {
	loader,
	element: <Posts />,
};
