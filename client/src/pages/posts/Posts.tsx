import { useLoaderData } from 'react-router';
import PostCard from './PostCard.tsx';

export function Posts() {
	const posts = useLoaderData<{ id: number; title: string; body: string }[]>();

	return (
		<>
			<h1 className='page-title'>Posts</h1>
			<div className='container'>
				<div className='card-grid'>
					{posts.map(({ id, ...post }) => (
						<PostCard
							key={id}
							id={id}
							{...post}
						/>
					))}
				</div>
			</div>
		</>
	);
}
