const baseUrl = import.meta.env.VITE_URL;
export const URLS = {
	posts: 'posts/',
	todos: 'todos/',
	users: 'users/',
	comments: 'comments/',
};

export async function getData<T>(
	signal: AbortSignal,
	endPoint = '',
	id = '',
): Promise<T> {
	let url = baseUrl + endPoint;

	if (id !== '') {
		url += id;
	}

	const res = await fetch(url, { signal });
	if (!res.ok) {
		throw new Error('Page not found');
	}
	return res.json();
}
