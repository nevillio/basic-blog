const baseUrl = 'http://localhost:3000/';
export const URLS = { posts: 'posts/', todos: 'todos/', users: 'users/' };

export async function getData(signal: AbortSignal, endPoint = '', id = '') {
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
