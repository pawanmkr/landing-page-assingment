import { Router } from 'express';
import { processPayment } from '../services/payment.js';
import { z } from 'zod';

const router = Router();

const paymentSchema = z.object({
	amount: z.number().positive(),
	currency: z.string(),
	token: z.string()
});

router.post('/process', async (req, res) => {
	try {
		const { amount, currency, token } = paymentSchema.parse(req.body);
		const payment = await processPayment(amount, currency, token);
		res.json(payment);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

export { router as paymentRouter };