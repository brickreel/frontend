"use client";

import Link from "next/link";

export default function TermsPage() {
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

      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-12">
          <span className="text-on-tertiary-container font-bold tracking-widest text-xs uppercase mb-4 block">Legal</span>
          <h1 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-4">Terms of Service</h1>
          <p className="text-on-surface-variant">Last updated: May 24, 2024</p>
        </div>

        <div className="space-y-10 text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using BrickReel (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you may not use the Service.</p>
          </section>
          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">2. Description of Service</h2>
            <p>BrickReel provides AI-powered video analysis tools for real estate professionals. The Service analyzes video metrics and provides actionable insights to improve content performance and viewer engagement.</p>
          </section>
          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">3. User Accounts</h2>
            <p>You must create an account to use the Service. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.</p>
          </section>
          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">4. Acceptable Use</h2>
            <p>You agree not to use the Service for any unlawful purpose, upload content that infringes on third-party intellectual property rights, attempt to reverse engineer any part of the Service, or resell access to the Service without our written consent.</p>
          </section>
          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">5. Intellectual Property</h2>
            <p>The Service and its original content are owned by BrickReel and protected by international copyright and trademark laws. Your video content remains your property; you grant us a limited license to process it solely to provide the Service.</p>
          </section>
          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">6. Subscription and Billing</h2>
            <p>Paid plans are billed in advance on a monthly or annual basis and automatically renew unless cancelled. Refunds are not provided for partial billing periods. We reserve the right to change pricing with 30 days advance notice.</p>
          </section>
          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, BrickReel shall not be liable for any indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.</p>
          </section>
          <section>
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">8. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:legal@brickreel.ai" className="text-primary hover:underline">legal@brickreel.ai</a>.</p>
          </section>
        </div>
      </main>

      <footer className="bg-surface-container-low mt-20 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-lg font-headline font-bold text-on-surface">BrickReel</span>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="/privacy" className="text-on-surface-variant hover:text-on-surface transition-colors">Privacy</Link>
            <Link href="/terms" className="text-on-surface font-semibold">Terms</Link>
            <Link href="/contact" className="text-on-surface-variant hover:text-on-surface transition-colors">Contact</Link>
          </div>
          <p className="text-on-surface-variant text-sm">© 2024 BrickReel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
