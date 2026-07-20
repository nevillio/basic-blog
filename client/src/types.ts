import type { Params } from 'react-router';

export type PostType = {
	id: number;
	userId: number;
	title: string;
	body: string;
};

export type BaseUser = {
	id: number;
	name: string;
	email: string;
	website: string;
	company: Record<string, string>;
	address: Record<string, string>;
};

export type TodoType = {
	id: number;
	title: string;
	completed: boolean;
	userId: number;
};

export type Request = { signal: AbortSignal };
export type LoaderParams = { request: Request; params?: Params<string> };
