import React, { useState } from 'react';

export function Contact() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/email/send`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ to: email, subject: 'New Contact Form', body: message })
          });
          if (!response.ok) throw new Error('Failed to send email');
          setMessage("Email sent sucessfully");
        } catch (error) {
          console.error(error);
        }
    };  

	return (
		<div className="bg-white py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl font-extrabold text-gray-900">Get in touch</h2>
					<p className="mt-4 text-lg text-gray-500">
						Have questions? We'd love to hear from you.
					</p>
				</div>
				<div className="mt-12 max-w-lg mx-auto">
					<form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
								required
							/>
						</div>
						<div>
							<label htmlFor="message" className="block text-sm font-medium text-gray-700">
								Message
							</label>
							<textarea
								id="message"
								rows={4}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
								required
							/>
						</div>
						<div>
							<button type="submit" className="btn btn-primary w-full">
								Send message
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}