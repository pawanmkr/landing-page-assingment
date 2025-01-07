import Stripe from 'stripe';
import { db } from '../database/setup.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
	apiVersion: '2023-10-16'
});

export async function processPayment(amount: number, currency: string, token: string) {
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency,
			payment_method: token,
			confirm: true
		});

		// Log transaction in database
		db.prepare(`
			INSERT INTO transactions (user_id, amount, status)
			VALUES (?, ?, ?)
		`).run(1, amount, payment.status);

		return payment;
	} catch (error) {
		console.error('Payment processing failed:', error);
		throw new Error('Failed to process payment');
	}
}