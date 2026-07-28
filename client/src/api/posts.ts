import { getData, URLS } from '@/api/baseApi';
import type { Comment, PostType } from '@/types';

export async function getPosts(signal: AbortSignal) {
	return getData<PostType[]>(signal, URLS.posts);
}

export async function getPost(signal: AbortSignal, id: string) {
	return getData<PostType>(signal, `${URLS.posts}/${id}`);
}

export async function getUserPosts(signal: AbortSignal, userId: string) {
	return getData<PostType>(signal, `${URLS.posts}/?userId=${userId}`);
}

export async function getComments(signal: AbortSignal, id: string) {
	return getData<Comment[]>(signal, `${URLS.posts}/${id}/comments`);
}
