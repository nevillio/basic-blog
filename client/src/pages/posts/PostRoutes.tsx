import { getData, URLS } from '@/api.ts';
import type { LoaderParams, PostType } from '@/types.ts';
import { Post } from './Post.tsx';
import { Posts } from './Posts.tsx';
import type { Comment, PostWithComments } from './PostTypes.ts';

const loader = ({ request: { signal } }: LoaderParams) =>
	getData<PostType[]>(signal, URLS.posts).catch((error) => {
		throw new Error(error);
	});

export const PostsRoute = {
	loader,
	element: <Posts />,
};

export const PostRoute = {
	element: <Post />,
	loader: async ({
		request: { signal },
		params,
	}: LoaderParams): Promise<PostWithComments> => {
		const post = await getData<PostType>(signal, URLS.posts, params.postId);
		const comments = await getData<Comment[]>(signal, URLS.comments);

		const filteredComments = comments.filter(
			({ postId }) => postId.toString() === params.postId,
		);
		return { ...post, comments: filteredComments };
	},
};
