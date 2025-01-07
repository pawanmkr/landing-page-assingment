import React from 'react';
import { Github } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-gray-50">
			<nav className="bg-white border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex">
							<div className="flex-shrink-0 flex items-center">
								<span className="text-xl font-bold">API Boilerplate</span>
							</div>
						</div>
						<div className="flex items-center">
							<a
								href="https://github.com/yourusername/api-integration-boilerplate"
								className="text-gray-500 hover:text-gray-700"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github className="h-6 w-6" />
							</a>
						</div>
					</div>
				</div>
			</nav>
			<main>{children}</main>
			<footer className="bg-white border-t">
				<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
					<p className="text-center text-gray-500">
						© {new Date().getFullYear()} API Integration Boilerplate. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}