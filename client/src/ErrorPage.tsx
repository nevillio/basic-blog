import { useRouteError } from 'react-router';

export default function ErrorPage() {
	const error = useRouteError();
	return (
		<>
			<div>Error - Something went wrong</div>
			{import.meta.env.DEV && error instanceof Error && (
				<>
					<pre>{error.message}</pre>
					<pre>{error.stack}</pre>
				</>
			)}
		</>
	);
}
