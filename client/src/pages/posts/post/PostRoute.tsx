import { getData, URLS } from '../../../api.ts';
import { Post } from './Post.tsx';

export const PostRoute = {
	element: <Post />,
	loader: ({ request: { signal }, params }) =>
		getData(signal, URLS.posts, params.postId),
};
