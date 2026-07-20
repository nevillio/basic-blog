import type { BaseUser, PostType, TodoType } from '../../types.ts';

export type RawUser = BaseUser & {
	company: Record<string, any>;
};

export type User = BaseUser & {
	companyName: string;
};

export type UserPage = BaseUser & { todos: TodoType[] } & { posts: PostType[] };
