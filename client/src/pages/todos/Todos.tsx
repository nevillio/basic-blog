import { useLoaderData } from 'react-router';
import type { TodoType } from '@/types.ts';

export default function Todos() {
	const todos = useLoaderData<TodoType[]>();

	return (
		<div className='container'>
			<h1 className='page-title'>Todos</h1>
			<ul>
				{todos.map(({ id, title, completed }) => {
					return (
						<li
							key={id}
							className={completed ? 'strike-through' : ''}
						>
							{title}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
