import { getAllProjects } from '../lib/db-admin';
import Navbar from '../components/navbar';
import { useEffect, useState } from 'react';

export async function getStaticProps(context) {
	// const siteId = context.params.siteId;
	const { projects } = await getAllProjects();
	console.log('our projects in getstaticprops:', projects);
	return {
		props: {
			projects: projects || null,
		},
	};
}

export default function Search({ projects }) {
	const [results, setResults] = useState([]);

	return (
		<>
			<Navbar />
			<div>
				In search page
				<div></div>
			</div>
		</>
	);
}
