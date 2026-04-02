"use client";

import Link from "next/link";
import MarketingNav from "@/components/MarketingNav";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface">
      <MarketingNav />

      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="pt-20 pb-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-12">
            <div className="flex-1">
              <span className="text-on-tertiary-container font-headline font-bold text-sm tracking-widest uppercase">Legal & Compliance</span>
              <h1 className="font-headline font-extrabold text-5xl md:text-7xl mt-4 mb-6 tracking-tight leading-tight">Privacy Policy</h1>
              <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
                At BrickReel, your data privacy is the blueprint of our integrity. We process architectural video data with military-grade precision and absolute transparency.
              </p>
            </div>
            <div className="hidden md:block pb-4">
              <div className="text-on-surface-variant font-medium text-sm">Last updated: May 24, 2024</div>
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 py-12">
          {/* Sidebar Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-1">
              <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6">Navigation</h3>
              <nav className="flex flex-col gap-1 border-l border-outline-variant/20">
                <a className="py-2 pl-4 border-l-2 border-transparent text-on-surface-variant hover:text-on-surface transition-all font-medium text-sm" href="#introduction">Introduction</a>
                <a className="py-2 pl-4 border-l-2 border-primary text-on-surface font-bold text-sm" href="#data-collection">Data Collection</a>
                <a className="py-2 pl-4 border-l-2 border-transparent text-on-surface-variant hover:text-on-surface transition-all font-medium text-sm" href="#processing">AI Video Processing</a>
                <a className="py-2 pl-4 border-l-2 border-transparent text-on-surface-variant hover:text-on-surface transition-all font-medium text-sm" href="#cookies">Cookies & Tracking</a>
                <a className="py-2 pl-4 border-l-2 border-transparent text-on-surface-variant hover:text-on-surface transition-all font-medium text-sm" href="#security">Security Standards</a>
                <a className="py-2 pl-4 border-l-2 border-transparent text-on-surface-variant hover:text-on-surface transition-all font-medium text-sm" href="#your-rights">Your Data Rights</a>
                <a className="py-2 pl-4 border-l-2 border-transparent text-on-surface-variant hover:text-on-surface transition-all font-medium text-sm" href="#contact">Legal Contact</a>
              </nav>
              <div className="mt-12 p-6 rounded-xl bg-surface-container-low">
                <svg className="w-6 h-6 text-on-tertiary-container mb-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2a1 1 0 001 1h1v2H3a1 1 0 00-1 1v2a2 2 0 002 2h1v1a1 1 0 001 1h2a1 1 0 001-1v-1h2v1a1 1 0 001 1h2a1 1 0 001-1v-1h1a2 2 0 002-2v-2a1 1 0 01 1-1h1V9a1 1 0 00-1-1H17V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm2 5a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
                </svg>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Questions about our compliance? Our data protection officer is available for enterprise inquiries.
                </p>
              </div>
            </div>
          </aside>

          {/* Text Content */}
          <div className="space-y-20 max-w-3xl">
            <article className="scroll-mt-32" id="introduction">
              <h2 className="font-headline font-bold text-3xl mb-8 tracking-tight">1. Introduction</h2>
              <div className="space-y-4 text-on-surface-variant leading-[1.8] font-body">
                <p>BrickReel (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) provides a specialized AI platform designed to analyze real estate cinematography. This Privacy Policy describes how we collect, use, and protect the data you entrust to us when using our services.</p>
                <p>By using BrickReel, you acknowledge the processing practices described herein. We treat all architectural visual data as proprietary and confidential information of the user.</p>
              </div>
            </article>

            <article className="scroll-mt-32" id="data-collection">
              <h2 className="font-headline font-bold text-3xl mb-8 tracking-tight">2. Data Collection</h2>
              <div className="bg-surface-container-lowest p-8 rounded-xl space-y-8 mb-8">
                <div>
                  <h4 className="font-headline font-bold text-on-surface text-lg mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-on-tertiary-container" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Account Information
                  </h4>
                  <p className="text-on-surface-variant text-sm">Full name, professional email address, and organizational details required for billing and workspace management.</p>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-on-surface text-lg mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-on-tertiary-container" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      <path fillRule="evenodd" d="M14.447 8.894a1 1 0 10-1.414-1.414L10 9.172 7.967 7.14a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Asset Uploads
                  </h4>
                  <p className="text-on-surface-variant text-sm">Video files, metadata, and location coordinates associated with real estate properties intended for AI analysis.</p>
                </div>
              </div>
              <p className="text-on-surface-variant leading-[1.8] mt-6">We do not sell, rent, or lease your video data to third parties. Our AI training models utilize anonymized metadata only if explicit consent is provided through the Professional Tier settings.</p>
            </article>

            <article className="scroll-mt-32" id="processing">
              <h2 className="font-headline font-bold text-3xl mb-8 tracking-tight">3. AI Video Processing</h2>
              <p className="text-on-surface-variant leading-[1.8] mb-6">Our processing engine analyzes architectural videos to extract insights regarding lighting, spatial flow, and material quality. This process involves:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start gap-4 p-5 bg-surface-container-low rounded-lg transition-all hover:bg-surface-container-high">
                  <svg className="w-5 h-5 text-on-primary-container flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Temporary cloud buffering during extraction</span>
                </li>
                <li className="flex items-start gap-4 p-5 bg-surface-container-low rounded-lg transition-all hover:bg-surface-container-high">
                  <svg className="w-5 h-5 text-on-primary-container flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Keyframe hashing for duplicate detection</span>
                </li>
                <li className="flex items-start gap-4 p-5 bg-surface-container-low rounded-lg transition-all hover:bg-surface-container-high">
                  <svg className="w-5 h-5 text-on-primary-container flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Automated metadata tagging for SEO</span>
                </li>
                <li className="flex items-start gap-4 p-5 bg-surface-container-low rounded-lg transition-all hover:bg-surface-container-high">
                  <svg className="w-5 h-5 text-on-primary-container flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Secure asset delivery via CDN</span>
                </li>
              </ul>
            </article>

            <article className="scroll-mt-32" id="cookies">
              <h2 className="font-headline font-bold text-3xl mb-8 tracking-tight">4. Cookies & Tracking</h2>
              <p className="text-on-surface-variant leading-[1.8]">We use &quot;Cookies&quot; and similar tracking technologies to improve user experience. Essential cookies are required for session management and security. Analytics cookies help us understand platform usage to optimize rendering performance.</p>
              <div className="mt-8 p-1 bg-surface-container-high rounded-full w-fit">
                <button className="px-6 py-2 rounded-full bg-surface-container-lowest text-sm font-bold shadow-sm hover:bg-surface-container transition-all">
                  Manage Preferences
                </button>
              </div>
            </article>

            <article className="scroll-mt-32" id="security">
              <h2 className="font-headline font-bold text-3xl mb-8 tracking-tight">5. Security Standards</h2>
              <div className="relative overflow-hidden rounded-2xl bg-primary text-on-primary p-12">
                <div className="relative z-10">
                  <h3 className="font-headline text-2xl font-bold mb-4 italic">SOC2 Type II Compliant</h3>
                  <p className="text-on-primary-container leading-[1.8] max-w-xl">
                    We employ AES-256 encryption for data at rest and TLS 1.3 for data in transit. Our servers are distributed across geographically isolated Tier 4 data centers with 24/7 physical monitoring.
                  </p>
                </div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-tertiary-fixed/10 rounded-full blur-[100px]"></div>
                <div className="absolute -left-20 -top-20 w-60 h-60 bg-secondary-fixed/5 rounded-full blur-[80px]"></div>
              </div>
            </article>

            <article className="scroll-mt-32" id="your-rights">
              <h2 className="font-headline font-bold text-3xl mb-8 tracking-tight">6. Your Data Rights</h2>
              <p className="text-on-surface-variant leading-[1.8] mb-8">Depending on your location (such as the EU under GDPR or California under CCPA), you have specific rights regarding your personal data:</p>
              <div className="grid grid-cols-1 gap-2">
                <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center group cursor-default hover:bg-surface-container-low transition-colors">
                  <span className="font-bold text-on-surface group-hover:translate-x-1 transition-transform">Right to Access</span>
                  <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center group cursor-default hover:bg-surface-container-low transition-colors">
                  <span className="font-bold text-on-surface group-hover:translate-x-1 transition-transform">Right to Rectification</span>
                  <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center group cursor-default hover:bg-surface-container-low transition-colors">
                  <span className="font-bold text-on-surface group-hover:translate-x-1 transition-transform">Right to Erasure (The Right to be Forgotten)</span>
                  <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center group cursor-default hover:bg-surface-container-low transition-colors">
                  <span className="font-bold text-on-surface group-hover:translate-x-1 transition-transform">Right to Data Portability</span>
                  <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </article>

            <article className="scroll-mt-32 pb-20" id="contact">
              <h2 className="font-headline font-bold text-3xl mb-8 tracking-tight">7. Legal Contact</h2>
              <div className="p-8 rounded-2xl bg-tertiary-fixed text-on-tertiary-fixed">
                <p className="mb-6 font-medium">For all privacy-related inquiries, please contact our legal team:</p>
                <div className="space-y-1">
                  <p className="font-bold text-xl">privacy@brickreel.ai</p>
                  <p className="opacity-70 text-sm">Attention: Data Protection Officer</p>
                  <p className="opacity-70 text-sm mt-4">1200 Architecture Ave, Suite 400<br/>San Francisco, CA 94103</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low w-full py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-headline font-black tracking-tighter text-on-surface">
            BrickReel AI
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-body text-sm text-on-surface-variant">
            <Link href="/privacy" className="text-on-surface transition-all">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline transition-all">Terms of Service</Link>
            <Link href="/contact" className="hover:underline transition-all">Contact Us</Link>
            <Link href="/" className="hover:underline transition-all">Documentation</Link>
          </div>
          <div className="font-body text-sm text-on-surface-variant opacity-80 hover:opacity-100 transition-opacity">
            © 2024 BrickReel AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
