# API Integration Boilerplate

A developer-friendly boilerplate for quickly creating landing pages with integrated email and payment functionality.

## Features

- 🚀 Quick setup with Node.js and Express
- 💻 React frontend with TailwindCSS
- 📧 Pre-configured email module using NodeMailer
- 💳 Payment processing with Stripe
- 🗄️ SQLite database for lightweight storage
- 📝 TypeScript support throughout
- 🔒 Environment variable management

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update the values
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
├── server/
│   ├── database/     # Database setup and configuration
│   ├── routes/       # API routes
│   ├── services/     # Business logic
│   └── index.ts      # Server entry point
├── src/
│   ├── components/   # React components
│   ├── App.tsx      # Main React component
│   └── main.tsx     # Frontend entry point
```

## Customizing Landing Pages

1. Modify components in `src/components/`
2. Update styles using TailwindCSS classes
3. Add new routes in `server/routes/` for additional functionality

## Using Email Module

```typescript
import { sendEmail } from '../services/email';

// Send an email
await sendEmail(
	'user@example.com',
	'Welcome!',
	'<h1>Welcome to our service!</h1>'
);
```

## Using Payment Module

```typescript
import { processPayment } from '../services/payment';

// Process a payment
const payment = await processPayment(
	1000, // amount in cents
	'usd',
	'tok_visa' // Stripe token
);
```

## Limitations

- SQLite database is suitable for development but may need to be replaced with a more robust solution for production
- Email functionality requires proper SMTP configuration
- Payment processing requires a valid Stripe account and API keys

## License

MIT