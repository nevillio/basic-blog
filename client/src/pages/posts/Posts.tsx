import { useLoaderData } from 'react-router';
import type { PostType } from '@/types.ts';
import PostCard from './components/PostCard.tsx';

export function Posts() {
	const posts = useLoaderData<PostType[]>();

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
