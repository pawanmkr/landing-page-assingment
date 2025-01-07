import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
	return (
		<footer className="bg-white border-t">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="col-span-2">
						<h3 className="text-lg font-semibold">API Integration Boilerplate</h3>
						<p className="mt-4 text-gray-500">
							Build beautiful landing pages with integrated email and payment functionality.
						</p>
						<div className="mt-6 flex space-x-6">
							<a href="#" className="text-gray-400 hover:text-gray-500">
								<Github className="h-6 w-6" />
							</a>
							<a href="#" className="text-gray-400 hover:text-gray-500">
								<Twitter className="h-6 w-6" />
							</a>
							<a href="#" className="text-gray-400 hover:text-gray-500">
								<Linkedin className="h-6 w-6" />
							</a>
						</div>
					</div>
					<div>
						<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
						<ul className="mt-4 space-y-4">
							<li>
								<a href="#" className="text-base text-gray-500 hover:text-gray-900">
									Documentation
								</a>
							</li>
							<li>
								<a href="#" className="text-base text-gray-500 hover:text-gray-900">
									GitHub
								</a>
							</li>
							<li>
								<a href="#" className="text-base text-gray-500 hover:text-gray-900">
									Examples
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
						<ul className="mt-4 space-y-4">
							<li>
								<a href="#" className="text-base text-gray-500 hover:text-gray-900">
									Privacy
								</a>
							</li>
							<li>
								<a href="#" className="text-base text-gray-500 hover:text-gray-900">
									Terms
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-200 pt-8">
					<p className="text-base text-gray-400 text-center">
						© {new Date().getFullYear()} API Integration Boilerplate. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}