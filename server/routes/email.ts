import { Router } from 'express';
import { sendEmail } from '../services/email.js';
import { z } from 'zod';

const router = Router();

const emailSchema = z.object({
	to: z.string().email(),
	subject: z.string(),
	body: z.string()
});

router.post('/send', async (req, res) => {
	try {
		const { to, subject, body } = emailSchema.parse(req.body);
		await sendEmail(to, subject, body);
		res.json({ success: true });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

export { router as emailRouter };