import { getAllProjects } from '../lib/db-admin';
import Navbar from '../components/navbar';
import { useEffect, useState } from 'react';

export async function getStaticProps(context) {
	const { projects } = await getAllProjects();
	console.log('our projects in getstaticprops:', projects);
	return {
		props: {
			projects: projects || null,
		},
	};
}

export default function Search({ projects }) {
	const [results, setResults] = useState([{ title: 'testing' }]);

	useEffect(() => {
		console.log('our projects in search: ', projects);
		setResults(projects);
	}, [projects]);

	return (
		<>
			<Navbar />
			<div>
				In search page
				<div>
					<h1>Serach Results</h1>
					<div>
						{results.map((result) => {
							<h2>something</h2>;
						})}
					</div>
				</div>
			</div>
		</>
	);
}
