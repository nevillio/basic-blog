import type { Comment, PostType } from '@/types.ts';

export type PostPage = PostType & {
	comments: Comment[];
	name: string;
};
