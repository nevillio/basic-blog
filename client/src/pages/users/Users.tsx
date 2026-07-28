import { useLoaderData } from 'react-router';
import type { UserType } from '@/types.ts';
import UserCard from './components/UserCard';

export default function Users() {
	const data: UserType[] = useLoaderData();

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
