import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
	{
		name: 'Sarah Johnson',
		role: 'CTO at TechStart',
		image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
		content: 'This boilerplate saved us weeks of development time. The email and payment integrations work flawlessly.',
		rating: 5
	},
	{
		name: 'Michael Chen',
		role: 'Founder at DevLabs',
		image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
		content: 'The documentation is excellent, and the code structure is clean and maintainable.',
		rating: 5
	},
	{
		name: 'Emily Rodriguez',
		role: 'Lead Developer',
		image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
		content: 'Perfect starting point for our landing pages. Highly recommended!',
		rating: 5
	}
];

export function Testimonials() {
	return (
		<div className="bg-gray-50 py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl font-extrabold text-gray-900">Loved by developers</h2>
					<p className="mt-4 text-lg text-gray-600">Here's what our users have to say</p>
				</div>
				<div className="mt-16 grid gap-8 lg:grid-cols-3">
					{testimonials.map((testimonial) => (
						<div key={testimonial.name} className="bg-white rounded-lg shadow-lg p-8">
							<div className="flex items-center space-x-1 mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
								))}
							</div>
							<p className="text-gray-600 mb-6">{testimonial.content}</p>
							<div className="flex items-center">
								<img
									className="h-12 w-12 rounded-full object-cover"
									src={testimonial.image}
									alt={testimonial.name}
								/>
								<div className="ml-4">
									<h4 className="font-semibold">{testimonial.name}</h4>
									<p className="text-gray-500 text-sm">{testimonial.role}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}