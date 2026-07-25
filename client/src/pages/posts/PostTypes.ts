import type { PostType } from '@/types.ts';

export type Comment = {
	id: number;
	name?: string;
	email: string;
	body: string;
	postId: number;
};

export type PostWithComments = PostType & {
	comments: Comment[];
};
