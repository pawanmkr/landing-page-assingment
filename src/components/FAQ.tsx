import React from 'react';

const faqs = [
	{
		question: 'How do I get started?',
		answer: 'Clone the repository, install dependencies, and follow our quick start guide in the README.'
	},
	{
		question: 'Can I customize the design?',
		answer: 'Yes! The codebase is built with TailwindCSS, making it easy to modify styles and components.'
	},
	{
		question: 'Do you offer support?',
		answer: 'We provide community support through GitHub issues and our Discord channel.'
	},
	{
		question: 'Is it production-ready?',
		answer: 'Yes, the boilerplate includes best practices and security measures for production use.'
	}
];

export function FAQ() {
	return (
		<div className="bg-gray-50 py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
					<p className="mt-4 text-lg text-gray-600">Have questions? We're here to help.</p>
				</div>
				<div className="mt-16 max-w-3xl mx-auto">
					<dl className="space-y-8">
						{faqs.map((faq) => (
							<div key={faq.question} className="bg-white p-8 rounded-lg shadow-lg">
								<dt className="text-lg font-semibold text-gray-900">{faq.question}</dt>
								<dd className="mt-3 text-gray-500">{faq.answer}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}