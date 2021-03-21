import React from 'react';

function ProjectCard({ info }) {
	return (
		<div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
			<img
				className="w-full"
				src="https://tailwindcss.com/img/card-top.jpg"
				alt="Sunset in the mountains"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{info.title}</div>
				<p className="text-grey-darker text-base">{info.description}</p>
			</div>
			<div className="px-6 pb-4 flex justify-start">
				<span className="inline-block bg-grey-lighter rounded-full text-sm font-semibold text-grey-darker mr-2">
					#photography
				</span>
				<span className="inline-block bg-grey-lighter rounded-full text-sm font-semibold text-grey-darker mr-2">
					#travel
				</span>
				<span className="inline-block bg-grey-lighter rounded-full text-sm font-semibold text-grey-darker">
					#winter
				</span>
			</div>
		</div>
	);
}

export default ProjectCard;
