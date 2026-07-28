import { getComments, getPost, getPosts } from '@/api/posts';
import { getUser } from '@/api/users.ts';
import type { LoaderParams } from '@/types.ts';
import { Post } from '../Post.tsx';
import { Posts } from '../Posts.tsx';
import type { PostPage } from '../PostTypes.ts';

const loader = ({ request: { signal } }: LoaderParams) => getPosts(signal);

export const PostsRoute = {
	loader,
	element: <Posts />,
};

export const PostRoute = {
	element: <Post />,
	loader: async ({
		request: { signal },
		params: { postId },
	}: LoaderParams): Promise<PostPage> => {
		const comments = getComments(signal, postId);
		const post = await getPost(signal, postId);
		const user = getUser(signal, post.userId.toString());

		return { ...post, comments: await comments, name: (await user).name };
	},
};
