import { useLoaderData } from 'react-router';
import type { BaseUser } from '../../types.ts';
import UserCard from './UserCard';

export default function Users() {
	const data: BaseUser[] = useLoaderData();

	return (
		<div className='container'>
			<h1 className='page-title'>Users</h1>
			<div className='card-grid'>
				{data.map(({ id, ...user }) => (
					<UserCard
						key={id}
						id={id}
						{...user}
					/>
				))}
			</div>
		</div>
	);
}
