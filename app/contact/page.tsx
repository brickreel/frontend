"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with contact API endpoint
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-outline-variant/10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <Link href="/" className="text-xl font-headline font-extrabold tracking-tighter text-on-surface">
            BrickReel
          </Link>
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-tight">
            <Link href="/dashboard" className="text-on-surface-variant hover:text-on-surface transition-colors">Dashboard</Link>
            <a href="/#features" className="text-on-surface-variant hover:text-on-surface transition-colors">Features</a>
            <Link href="/pricing" className="text-on-surface-variant hover:text-on-surface transition-colors">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden sm:block text-on-surface font-semibold text-sm px-4 py-2 hover:bg-surface-container-high rounded-lg transition-all">Login</Link>
            <Link href="/signup" className="bg-primary text-on-primary rounded-full px-6 py-2.5 text-sm font-bold hover:opacity-90 transition-all">Start Analyzing</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="mb-16 text-center">
          <span className="text-on-tertiary-container font-bold tracking-widest text-xs uppercase mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter text-on-surface mb-4">
            Contact Us
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
            Have questions about BrickReel? Our team is ready to help you transform your real estate video strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-headline font-bold text-on-surface mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary-container flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-on-secondary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">Email</p>
                    <a href="mailto:hello@brickreel.ai" className="text-on-surface-variant hover:text-primary transition-colors">hello@brickreel.ai</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary-container flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-on-secondary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">Office</p>
                    <p className="text-on-surface-variant">San Francisco, CA 94105</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary-container flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-on-secondary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">Response Time</p>
                    <p className="text-on-surface-variant">Within 24 business hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-container rounded-2xl p-6">
              <h3 className="font-headline font-bold text-on-primary mb-2">Enterprise Sales</h3>
              <p className="text-on-primary-container text-sm mb-4">Looking for a custom plan for your agency? Our enterprise team will build a tailored solution for you.</p>
              <a href="mailto:sales@brickreel.ai" className="text-on-primary font-semibold text-sm hover:underline">sales@brickreel.ai →</a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-surface-container-lowest rounded-2xl p-10 text-center">
                <div className="h-16 w-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-on-secondary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Message Sent!</h3>
                <p className="text-on-surface-variant">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-12 px-4 bg-surface-container-lowest border border-outline-variant/20 rounded-lg focus:ring-4 focus:ring-tertiary-fixed/30 text-on-surface placeholder:text-outline transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@agency.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-12 px-4 bg-surface-container-lowest border border-outline-variant/20 rounded-lg focus:ring-4 focus:ring-tertiary-fixed/30 text-on-surface placeholder:text-outline transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="company">Company (optional)</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Acme Real Estate"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full h-12 px-4 bg-surface-container-lowest border border-outline-variant/20 rounded-lg focus:ring-4 focus:ring-tertiary-fixed/30 text-on-surface placeholder:text-outline transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-lg focus:ring-4 focus:ring-tertiary-fixed/30 text-on-surface placeholder:text-outline transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-full hover:opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-surface-container-low mt-20 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-lg font-headline font-bold text-on-surface">BrickReel</span>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="/privacy" className="text-on-surface-variant hover:text-on-surface transition-colors">Privacy</Link>
            <Link href="/terms" className="text-on-surface-variant hover:text-on-surface transition-colors">Terms</Link>
            <Link href="/contact" className="text-on-surface font-semibold">Contact</Link>
          </div>
          <p className="text-on-surface-variant text-sm">© 2024 BrickReel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
