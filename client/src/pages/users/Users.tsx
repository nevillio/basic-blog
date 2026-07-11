import { useLoaderData } from 'react-router';
import UserCard from './user/UserCard';

type BaseUser = {
	id: number;
	name: string;
	email: string;
	website: string;
};

type RawUser = BaseUser & {
	company: Record<string, any>;
};

export type User = BaseUser & {
	companyName: string;
};

export default function Users() {
	const data: RawUser[] = useLoaderData();

	return (
		<div className='container'>
			<h1 className='page-title'>Users</h1>
			<div className='card-grid'>
				{data.map(({ id, company, ...user }) => (
					<UserCard
						key={id}
						id={id}
						companyName={company.name}
						{...user}
					/>
				))}
			</div>
		</div>
	);
}
