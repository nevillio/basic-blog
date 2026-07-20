import { Link, useLoaderData } from 'react-router';
import type { PostWithComments } from './PostTypes.ts';

export function Post() {
	const {
		userId,
		title = '',
		body = '',
		comments,
	} = useLoaderData<PostWithComments>();
	return (
		<div className='container'>
			<h1 className='page-title'>{title}</h1>
			<span className='page-subtitle'>
				By: <Link to={`/users/${userId}`}>Leanne Graham</Link>
			</span>
			<div>{body}</div>
			<h3 className='mt-4 mb-2'>Comments</h3>
			<div className='card-stack'>
				{comments.map(({ id, email, body }) => (
					<div
						className='card'
						key={id}
					>
						<div className='card-body'>
							<div className='text-sm mb-1'>{email}</div>
							{body}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
