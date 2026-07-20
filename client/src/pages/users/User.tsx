import { Link, useLoaderData } from 'react-router';
import type { UserPage } from './UserTypes.ts';

export function User() {
	const {
		name,
		email,
		company: { name: companyName },
		website,
		address,
		posts,
		todos,
	} = useLoaderData<UserPage>();

	const getAddress = ({
		street,
		suite,
		city,
		zipcode,
	}: Record<string, string>) => `${street} ${suite}, ${city}, ${zipcode}`;

	return (
		<div className='container'>
			<h1 className='page-title'>{name}</h1>
			<div className='page-subtitle'>{email}</div>
			<div>
				<b>Company: </b>
				{companyName}
			</div>
			<div>
				<b>Website: </b>
				{website}
			</div>
			<div>
				<b>Address: </b>
				{getAddress(address)}
			</div>
			<h3 className='mt-4 mb-2'>Posts</h3>
			<div className='card-grid'>
				{posts.map(({ title, body, id }) => (
					<div
						key={id}
						className='card'
					>
						<div className='card-header'>{title}</div>
						<div className='card-body'>
							<div className='card-preview-text'>{body}</div>
						</div>
						<div className='card-footer'>
							<Link to='/posts'>View</Link>
						</div>
					</div>
				))}
			</div>
			<h3 className='mt-4 mb-2'>Todos</h3>
			<ul>
				{todos.map(({ id, title, completed }) => (
					<li
						key={id}
						className={completed ? 'strike-through' : ''}
					>
						{title}
					</li>
				))}
			</ul>
		</div>
	);
}
