import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
	return (
		<Layout>
			<Hero />
			<Features />
			<About />
			<Testimonials />
			<Pricing />
			<FAQ />
			<Contact />
			<Footer />
		</Layout>
	);
}

export default App;