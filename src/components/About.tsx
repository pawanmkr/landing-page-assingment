import React from 'react';
import { Code2, Rocket, Users } from 'lucide-react';

const values = [
	{
		icon: Code2,
		title: 'Developer First',
		description: 'Built by developers, for developers. Clean code and clear documentation.'
	},
	{
		icon: Rocket,
		title: 'Quick Launch',
		description: 'Get your landing page up and running in minutes, not days.'
	},
	{
		icon: Users,
		title: 'Community Driven',
		description: 'Join our community of developers building amazing products.'
	}
];

export function About() {
	return (
		<div className="bg-white py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center">
					<h2 className="text-3xl font-extrabold text-gray-900">About Us</h2>
					<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
						We're passionate about helping developers build better products faster.
					</p>
				</div>
				<div className="mt-16">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
						{values.map((value) => (
							<div key={value.title} className="text-center">
								<div className="flex justify-center">
									<value.icon className="h-12 w-12 text-indigo-600" />
								</div>
								<h3 className="mt-6 text-xl font-semibold">{value.title}</h3>
								<p className="mt-4 text-gray-500">{value.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}