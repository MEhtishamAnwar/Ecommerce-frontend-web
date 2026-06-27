import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 dark:bg-gray-950">
      <div className="container mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">About ShopMe</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Modern fashion, delivered with care.</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            ShopMe is built for shoppers who want stylish essentials, reliable delivery, and a simple checkout flow.
            We combine curated collections with helpful features that make buying online feel effortless.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/" className="rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:scale-105">
              Start shopping
            </Link>
            <Link to="/cart" className="rounded-full border border-[var(--primary)] px-6 py-3 font-semibold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white">
              View cart
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-xl dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-semibold">Why customers love us</h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>• Fresh arrivals across men, women, and accessories.</li>
            <li>• Transparent prices with instant totals in the cart.</li>
            <li>• Quick quantity controls and a simple buy flow.</li>
            <li>• Responsive design that works beautifully on any screen.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
