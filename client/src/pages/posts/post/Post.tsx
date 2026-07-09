import { Link, useLoaderData } from 'react-router';

export function Post() {
	const { id, userId, title = '', body = '' } = useLoaderData();
	return (
		<div className='container'>
			<h1 className='page-title'>{title}</h1>
			<span className='page-subtitle'>
				By: <Link to='user.html'>Leanne Graham</Link>
			</span>
			<div>{body}</div>
			<h3 className='mt-4 mb-2'>Comments</h3>
			<div className='card-stack'>
				<div className='card'>
					<div className='card-body'>
						<div className='text-sm mb-1'>Eliseo@gardner.biz</div>
						laudantium enim quasi est quidem magnam voluptate ipsam eos tempora
						quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente
						accusantium
					</div>
				</div>
			</div>
		</div>
	);
}
