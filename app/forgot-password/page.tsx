"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: integrate with password reset endpoint when available on backend
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-12">
      {/* Brand Side */}
      <section className="hidden md:flex md:col-span-5 lg:col-span-7 relative bg-gradient-to-br from-primary to-primary-container items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            alt="Real estate interior"
            className="w-full h-full object-cover mix-blend-overlay"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANAszQ57qkAmbB9EOq9FMi85qnxXQRLCzFlkgHI6bG0QkyZLj_w96Co04QU3pdAAt5PHxEPDsNeUhen6PVojUFXSWx5nIZnUxCkwDZOcla1IPH0z6mm_xSTQaQLclM8oht50tVtxzh4RONAow-jLUGxWWS9RaQAT8UngQIUlOBzrEQD20q8phazeAc5n6uVerwRo8pmSPBFHPUIxh_Mped_38dQW8xhOUsn8KAYCPtMVjetyOOXzroxOVgsgbu3xO2akJs-wGzaWc"
          />
        </div>
        <div className="relative z-10 max-w-xl">
          <div className="mb-8">
            <Link href="/" className="text-3xl font-headline font-extrabold tracking-tighter text-on-primary">
              BrickReel
            </Link>
          </div>
          <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-primary leading-none tracking-tighter mb-8">
            Reset Your <span className="text-tertiary-fixed-dim">Access.</span>
          </h1>
          <p className="text-xl text-primary-fixed-dim font-body leading-relaxed max-w-md">
            We&apos;ll send you a secure link to reset your password and get back to analyzing your content.
          </p>
        </div>
      </section>

      {/* Form Side */}
      <section className="col-span-1 md:col-span-7 lg:col-span-5 bg-surface flex items-center justify-center p-6 md:p-12 lg:p-20">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="md:hidden mb-12">
            <Link href="/" className="text-2xl font-headline font-extrabold tracking-tighter text-on-surface">
              BrickReel
            </Link>
          </div>

          {submitted ? (
            <div className="text-center">
              <div className="h-16 w-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-on-secondary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">Check your email</h2>
              <p className="text-on-surface-variant mb-8">
                If an account exists for <strong>{email}</strong>, we&apos;ve sent a password reset link. Check your inbox and spam folder.
              </p>
              <Link href="/login" className="text-primary font-semibold hover:underline">
                ← Back to Login
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h2 className="text-3xl font-headline font-bold text-on-surface mb-2 tracking-tight">
                  Forgot Password?
                </h2>
                <p className="text-on-surface-variant">
                  Enter your email and we&apos;ll send you a reset link.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 bg-surface-container-lowest border-none rounded-lg focus:ring-4 focus:ring-tertiary-fixed/30 text-on-surface placeholder:text-outline transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>

              <div className="mt-8 text-center">
                <Link href="/login" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">
                  ← Back to Login
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
