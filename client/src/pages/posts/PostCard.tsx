import { Link } from 'react-router';

type Props = {
	id: number;
	title: string;
	body: string;
};

export default function PostCard({ id, title, body }: Props) {
	return (
		<div className='card'>
			<div className='card-header'>{title}</div>
			<div className='card-body'>
				<div className='card-preview-text'>{body}</div>
			</div>
			<div className='card-footer'>
				<Link
					className='btn'
					to={`${id.toString()}`}
				>
					View
				</Link>
			</div>
		</div>
	);
}
