import type { PostType, TodoType, UserType } from '@/types.ts';

export type UserPage = UserType & { todos: TodoType[] } & { posts: PostType[] };
