"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import MarketingNav from "@/components/MarketingNav";

export default function HomePage() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen bg-surface">
      <MarketingNav activeLink="home" />

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-tight mb-6">
            Elevate Your Real Estate Content
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
            Analyze your property videos with AI-powered insights. Get actionable recommendations to boost engagement, improve retention, and convert more leads.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            {isLoggedIn ? (
              <Link href="/dashboard" className="px-8 py-4 bg-primary text-on-primary font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Go to Dashboard
              </Link>
            ) : (
              <Link href="/signup" className="px-8 py-4 bg-primary text-on-primary font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Start Free Analysis
              </Link>
            )}
            <button className="px-8 py-4 border border-outline-variant text-on-surface font-bold rounded-full hover:bg-surface-container transition-all">
              Watch Demo
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-8 text-sm text-on-surface-variant">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-tertiary-fixed" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free to start
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-tertiary-fixed" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card needed
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-tertiary-fixed" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Instant results
            </span>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/10">
            <div className="h-12 w-12 bg-secondary-container rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-on-secondary-container" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-headline font-bold text-on-surface mb-2">
              Instant Performance Score
            </h3>
            <p className="text-on-surface-variant">
              Get a 0-100 score based on engagement rate, watch time, and viewer retention patterns.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/10">
            <div className="h-12 w-12 bg-secondary-container rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-on-secondary-container" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2h10a1 1 0 100-2 2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2 1h8v8H6V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-headline font-bold text-on-surface mb-2">
              AI-Powered Insights
            </h3>
            <p className="text-on-surface-variant">
              Understand what&apos;s working and what&apos;s not with deep analysis of viewer behavior.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/10">
            <div className="h-12 w-12 bg-secondary-container rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-on-secondary-container" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-headline font-bold text-on-surface mb-2">
              Actionable Recommendations
            </h3>
            <p className="text-on-surface-variant">
              Get specific, implementable suggestions to improve your next video.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl font-headline font-bold text-on-primary mb-4">
            Ready to Analyze Your Videos?
          </h2>
          <p className="text-on-primary/80 text-lg max-w-xl mx-auto mb-8">
            Join real estate agents who are already using BrickReel to optimize their video content.
          </p>
          <Link href="/signup" className="px-10 py-4 bg-tertiary-fixed text-on-tertiary-fixed font-bold rounded-full hover:bg-tertiary-fixed-dim transition-all shadow-lg">
            Get Started Free
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low mt-20 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-lg font-headline font-bold text-on-surface">BrickReel</span>
          <div className="flex gap-6 flex-wrap justify-center md:justify-end">
            <Link href="/privacy"><span className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">Privacy</span></Link>
            <Link href="/terms"><span className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">Terms</span></Link>
            <Link href="/contact"><span className="text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer">Contact</span></Link>
          </div>
          <p className="text-on-surface-variant text-sm">© 2026 BrickReel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
