import { Link } from 'react-router';
import type { User } from '../Users.tsx';

export default function UserCard({
	id,
	name,
	companyName,
	website,
	email,
}: User) {
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
