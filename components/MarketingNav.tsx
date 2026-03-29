'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

type ActiveLink = 'home' | 'features' | 'pricing' | 'privacy' | 'terms' | 'contact' | undefined;

interface MarketingNavProps {
  activeLink?: ActiveLink;
}

export default function MarketingNav({ activeLink }: MarketingNavProps) {
  const router = useRouter();
  const { user, isLoggedIn, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    router.push('/login');
  };

  const linkClass = (link: ActiveLink) =>
    link === activeLink
      ? 'text-on-surface font-bold border-b-2 border-on-surface pb-0.5'
      : 'text-on-surface-variant hover:text-on-surface transition-colors';

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-headline font-extrabold tracking-tighter text-on-surface">
          BrickReel
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <a href="/#features" className={linkClass('features')}>
            Features
          </a>
          <Link href="/pricing" className={linkClass('pricing')}>
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <span className="hidden md:block text-sm text-on-surface-variant font-medium">
                {user?.email}
              </span>
              <Link
                href="/dashboard"
                className="px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface font-semibold text-sm transition-all hover:bg-surface-container-highest"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-5 py-2.5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold text-sm transition-all hover:opacity-90 shadow-lg shadow-primary-container/20"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden sm:block text-on-surface font-semibold text-sm px-4 py-2 hover:bg-surface-container-high rounded-lg transition-all"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2.5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold text-sm transition-all hover:opacity-90 shadow-lg shadow-primary-container/20"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
