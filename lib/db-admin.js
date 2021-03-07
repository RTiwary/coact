import db from './firebase-admin';

export async function getAllProjects() {
	try {
		const projects_data = await db.collection('projects').get();
		const projects = [];
		projects_data.forEach((doc) => {
			projects.push({ id: doc.id, ...doc.data() });
		});
		return { projects };
	} catch (error) {
		console.log('err:', error);
		return { error };
	}
}
