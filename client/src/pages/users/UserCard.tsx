import { Link } from 'react-router';
import type { BaseUser } from '../../types.ts';

export default function UserCard({
	id,
	name,
	company: { name: companyName },
	website,
	email,
}: BaseUser) {
	return (
		<div className='card'>
			<div className='card-header'>{name}</div>
			<div className='card-body'>
				<div>{companyName}</div>
				<div>{website}</div>
				<div>{email}</div>
			</div>
			<div className='card-footer'>
				<Link
					to={id.toString()}
					className='btn'
				>
					View
				</Link>
			</div>
		</div>
	);
}
