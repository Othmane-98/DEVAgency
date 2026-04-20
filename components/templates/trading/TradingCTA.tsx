'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function TradingCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 px-4 bg-[#0F1F1F]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Trade?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Join thousands of traders already profiting with our platform.
            Open an account in minutes.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-[#1A2A2A] border border-[#1FD9B6]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#1FD9B6] transition-colors"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-4 bg-[#1FD9B6] text-[#0F2A2A] font-bold rounded-lg hover:bg-[#1AC99F] transition-colors duration-300 whitespace-nowrap"
            >
              {submitted ? '✓ Sent' : 'Get Started'}
            </motion.button>
          </form>

          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#1FD9B6] mt-4 text-sm"
            >
              Check your email for next steps.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
