import { useState } from 'react';
import { Check } from 'lucide-react';

const tiers = [
    {
        name: 'Starter',
        price: 29,
        features: ['1,000 emails/month', 'Basic analytics', 'Community support'],
    },
    {
        name: 'Pro',
        price: 99,
        features: ['10,000 emails/month', 'Advanced analytics', 'Priority support', 'Custom domain'],
    },
    {
        name: 'Enterprise',
        price: 299,
        features: ['Unlimited emails', 'Custom analytics', '24/7 support', 'Multiple domains', 'SLA'],
    },
];

export function Pricing() {
    const [message, setMessage] = useState<string | null>(null);

    const handlePayment = async (price: number) => {
        try {
            const response = await fetch('/api/payment/process', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    amount: price * 100, // Stripe expects cents
                    currency: 'usd',
                    token: 'tok_visa', // In production, use a real token
                }),
            });
            if (!response.ok) throw new Error('Payment failed');

            setMessage('Payment successful!');
        } catch (error) {
            setMessage(`Payment failed`);
            console.error(error);
        }
    };

    return (
        <div className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Simple, transparent pricing
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Choose the plan that fits your needs
                    </p>
                </div>

                {/* Message Display */}
                {message && (
                    <div className={`mt-6 text-center text-lg font-semibold ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
                        {message}
                    </div>
                )}

                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className="pricing-card bg-white rounded-lg shadow-lg divide-y divide-gray-200"
                        >
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                                <p className="mt-4">
                                    <span className="text-4xl font-extrabold">${tier.price}</span>
                                    <span className="text-base font-medium text-gray-500">/month</span>
                                </p>
                                <button 
                                    className="btn btn-primary mt-8 w-full" 
                                    onClick={() => handlePayment(tier.price)}
                                    aria-label={`Subscribe to ${tier.name} plan`}
                                >
                                    Get started
                                </button>
                            </div>
                            <div className="px-6 pt-6 pb-8">
                                <ul className="space-y-4">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 mr-2" />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}