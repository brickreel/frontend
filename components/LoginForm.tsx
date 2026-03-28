'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { login, isAuthenticated } from '@/lib/auth';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace('/dashboard');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!email || !password) {
        setError('Por favor ingresa email y contraseña');
        return;
      }

      await login(email, password);
      router.push('/dashboard');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Mobile Logo */}
      <div className="md:hidden mb-12">
        <span className="text-2xl font-headline font-extrabold tracking-tighter text-on-surface">
          BrickReel
        </span>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-headline font-bold text-on-surface mb-2 tracking-tight">
          Welcome back
        </h2>
        <p className="text-on-surface-variant">
          Enter your credentials to access your analytics dashboard.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex bg-surface-container-low p-1 rounded-full mb-8">
        <span className="flex-1 py-2 text-sm font-semibold text-center rounded-full bg-surface-container-lowest text-on-surface shadow-sm">
          Login
        </span>
        <Link href="/signup" className="flex-1 py-2 text-sm font-semibold text-center text-on-surface-variant hover:text-on-surface transition-all">
          Sign Up
        </Link>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-error-container border border-error rounded-lg text-error-container">
          {error}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-on-surface" htmlFor="email">
            Email Address
          </label>
          <input
            className="w-full h-12 px-4 bg-surface-container-lowest border-none rounded-lg focus:ring-4 focus:ring-tertiary-fixed/30 text-on-surface placeholder:text-outline transition-all"
            id="email"
            placeholder="name@company.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-semibold text-on-surface" htmlFor="password">
              Password
            </label>
            <Link href="/forgot-password">
              <span className="text-xs font-semibold text-on-tertiary-container hover:underline cursor-pointer">
                Forgot Password?
              </span>
            </Link>
          </div>
          <div className="relative">
            <input
              className="w-full h-12 px-4 bg-surface-container-lowest border-none rounded-lg focus:ring-4 focus:ring-tertiary-fixed/30 text-on-surface placeholder:text-outline transition-all"
              id="password"
              placeholder="••••••••"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {showPassword ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <button
          className="w-full h-12 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={loading}
        >
          <span>{loading ? 'Logging in...' : 'Login'}</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </form>

      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-outline-variant/30"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase font-bold tracking-widest text-on-surface-variant">
          <span className="bg-surface px-4">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-3 h-12 bg-surface-container-high rounded-full hover:bg-surface-container-highest transition-all">
          <img
            alt="Google"
            className="w-5 h-5"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQWAkARJ0kbh4IBMBMPTtsqsXxUTBXxH1wUCLIXLC3jFaFDpdAncuC2cj32uf5BUaJFUJxA4lcx2cHGpMW9puvEyJOJH6XldYfEfDlhgXYLv_jHkq4e-SMKZDEvqvGrb0pk9017bGDBLJVz-ysBjMORgqeD-zvIFZW3xA1v9Ir-QmXu8cftoR_5rzafA0H6uC6RKUaDTQ5Jou4n_Kzf7hofjn8yl0BwNsd-nHQIjNW_IsJixvQ9TXvrAN48OBo26sy3P928itCSpI"
          />
          <span className="text-sm font-semibold">Google</span>
        </button>
        <button className="flex items-center justify-center gap-3 h-12 bg-surface-container-high rounded-full hover:bg-surface-container-highest transition-all">
          <svg className="w-5 h-5 fill-[#0077b5]" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
          </svg>
          <span className="text-sm font-semibold">LinkedIn</span>
        </button>
      </div>

      <div className="mt-12 text-center">
        <p className="text-xs text-on-surface-variant">
          By signing in, you agree to our{' '}
          <Link href="/terms">
            <span className="text-on-surface font-semibold hover:underline cursor-pointer">
              Terms of Service
            </span>
          </Link>{' '}
          and{' '}
          <Link href="/privacy">
            <span className="text-on-surface font-semibold hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
