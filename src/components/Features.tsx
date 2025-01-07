import React from 'react';
import { Mail, CreditCard, Database } from 'lucide-react';

const features = [
	{
		name: 'Email Integration',
		description: 'Send transactional emails easily with pre-configured NodeMailer setup.',
		icon: Mail
	},
	{
		name: 'Payment Processing',
		description: 'Accept payments securely using Stripe integration.',
		icon: CreditCard
	},
	{
		name: 'Data Storage',
		description: 'Built-in SQLite database for storing user data and transactions.',
		icon: Database
	}
];

export function Features() {
	return (
		<div className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center">
					<h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						Everything you need to get started
					</p>
				</div>

				<div className="mt-20">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="feature-card">
								<div className="flex items-center space-x-4">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
											<feature.icon className="h-6 w-6" />
										</div>
									</div>
									<div>
										<h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
										<p className="mt-2 text-base text-gray-500">{feature.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}