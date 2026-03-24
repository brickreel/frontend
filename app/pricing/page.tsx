"use client";

import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-headline font-extrabold tracking-tighter text-on-surface cursor-pointer">
              BrickReel
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
            <Link href="/">
              <span className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">Dashboard</span>
            </Link>
            <Link href="/">
              <span className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">Features</span>
            </Link>
            <Link href="/">
              <span className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">How it Works</span>
            </Link>
            <Link href="/pricing">
              <span className="text-on-surface font-bold border-b-2 border-on-surface cursor-pointer">Pricing</span>
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <button className="text-on-surface font-semibold text-sm px-4 py-2 hover:bg-surface-container-high rounded-lg transition-all">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-bold text-sm transition-all hover:opacity-90">
                Start Analyzing
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Pricing Header */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
          <span className="text-on-tertiary-container font-bold tracking-widest text-xs uppercase mb-4 block">
            Precision Pricing
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-6 leading-tight">
            Architectural Clarity for <br className="hidden md:block" /> Your Video Assets.
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
            Choose the lens that fits your portfolio. From individual creators to global enterprises, our AI scales with your vision.
          </p>
        </section>

        {/* Pricing Cards Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Starter Tier */}
            <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col h-full border border-outline-variant/10 transition-all hover:shadow-lg">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-on-surface mb-2">Starter</h3>
                <p className="text-on-surface-variant text-sm">Perfect for testing the architectural AI capabilities.</p>
              </div>
              <div className="mb-10">
                <span className="text-4xl font-extrabold text-on-surface">$0</span>
                <span className="text-on-surface-variant text-sm">/ forever</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <svg className="w-5 h-5 text-on-tertiary-container" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  3 Video Analyses per month
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <svg className="w-5 h-5 text-on-tertiary-container" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Basic recommendations depth
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <svg className="w-5 h-5 text-on-tertiary-container" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Standard export quality
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant opacity-50">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  No priority support
                </li>
              </ul>
              <Link href="/signup">
                <button className="w-full py-3 px-6 rounded-full font-bold text-sm bg-surface-container-high text-on-surface transition-all hover:bg-surface-container-highest">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Pro Tier (Most Popular) */}
            <div className="relative bg-primary-container rounded-xl p-8 flex flex-col h-full md:scale-110 shadow-2xl shadow-primary-container/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full z-10">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-on-primary mb-2">Pro</h3>
                <p className="text-on-primary-container text-sm">Professional grade tools for active real estate agents.</p>
              </div>
              <div className="mb-10">
                <span className="text-5xl font-extrabold text-on-primary">$49</span>
                <span className="text-on-primary-container text-sm">/ month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm text-on-primary">
                  <svg className="w-5 h-5 text-tertiary-fixed" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  50 Video Analyses per month
                </li>
                <li className="flex items-center gap-3 text-sm text-on-primary">
                  <svg className="w-5 h-5 text-tertiary-fixed" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Deep AI recommendations
                </li>
                <li className="flex items-center gap-3 text-sm text-on-primary">
                  <svg className="w-5 h-5 text-tertiary-fixed" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Priority email support
                </li>
                <li className="flex items-center gap-3 text-sm text-on-primary">
                  <svg className="w-5 h-5 text-tertiary-fixed" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom brand watermarking
                </li>
              </ul>
              <Link href="/signup">
                <button className="w-full py-4 px-6 rounded-full font-bold text-sm bg-white text-primary transition-all hover:bg-slate-100 shadow-lg">
                  Go Professional
                </button>
              </Link>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col h-full border border-outline-variant/10 transition-all hover:shadow-lg">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-on-surface mb-2">Enterprise</h3>
                <p className="text-on-surface-variant text-sm">Bespoke solutions for large agencies and platforms.</p>
              </div>
              <div className="mb-10">
                <span className="text-4xl font-extrabold text-on-surface">Custom</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <svg className="w-5 h-5 text-on-tertiary-container" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Unlimited analyses
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <svg className="w-5 h-5 text-on-tertiary-container" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  API Access & Integrations
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <svg className="w-5 h-5 text-on-tertiary-container" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Dedicated account manager
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <svg className="w-5 h-5 text-on-tertiary-container" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Whitelabel reporting
                </li>
              </ul>
              <Link href="/contact">
                <button className="w-full py-3 px-6 rounded-full font-bold text-sm bg-surface-container-high text-on-surface transition-all hover:bg-surface-container-highest">
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Bento Grid Feature Highlight */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-outline-variant/10">
          <h2 className="text-3xl font-bold tracking-tight mb-12">Every Plan Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl flex flex-col justify-between h-64 overflow-hidden relative group">
              <div>
                <svg className="w-8 h-8 mb-4 text-on-surface" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <h4 className="font-bold text-xl mb-2">Architectural Precision</h4>
                <p className="text-on-surface-variant text-sm">Our AI detects structural nuances that generic systems miss.</p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-secondary-fixed/30 rounded-full blur-2xl transition-all group-hover:scale-150"></div>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
              <svg className="w-8 h-8 mb-4 text-on-tertiary-container" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
              <h4 className="font-bold text-lg mb-2">Instant Insight</h4>
              <p className="text-on-surface-variant text-xs leading-relaxed">Analyses completed in under 60 seconds per video.</p>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
              <svg className="w-8 h-8 mb-4 text-on-tertiary-container" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c4.896-4.897 12.884-4.897 17.78 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" />
              </svg>
              <h4 className="font-bold text-lg mb-2">Cloud Storage</h4>
              <p className="text-on-surface-variant text-xs leading-relaxed">Securely store and share your analyzed assets anywhere.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-primary relative overflow-hidden rounded-3xl p-12 md:p-20 text-center">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-primary mb-8 relative z-10">
              Ready to transform your <br /> video workflow?
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
              <Link href="/signup">
                <button className="bg-tertiary-fixed text-on-tertiary-fixed px-10 py-4 rounded-full font-black text-sm tracking-widest uppercase transition-all hover:opacity-90 shadow-xl">
                  Get Started Now
                </button>
              </Link>
              <button className="border border-on-primary/30 text-on-primary px-10 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-all">
                Schedule a Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 mt-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-headline font-black tracking-tighter text-on-surface">BrickReel</div>
          <nav className="flex gap-8 font-body text-sm text-on-surface-variant">
            <Link href="/privacy">
              <span className="hover:underline transition-all opacity-80 hover:opacity-100 cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/terms">
              <span className="hover:underline transition-all opacity-80 hover:opacity-100 cursor-pointer">Terms of Service</span>
            </Link>
            <Link href="/contact">
              <span className="hover:underline transition-all opacity-80 hover:opacity-100 cursor-pointer">Contact Us</span>
            </Link>
            <Link href="/">
              <span className="hover:underline transition-all opacity-80 hover:opacity-100 cursor-pointer">Documentation</span>
            </Link>
          </nav>
          <p className="font-body text-sm text-on-surface-variant opacity-80">© 2024 BrickReel AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
