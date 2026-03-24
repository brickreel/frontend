'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Analysis {
  id: string;
  title: string;
  score: number;
  views: number;
  createdAt: string;
  insights?: string[];
  tags?: string[];
}

export default function DashboardComponent() {
  const [analyses, setAnalyses] = useState<Analysis[]>([]);
  const [loading, setLoading] = useState(true);
  const [avgEngagement, setAvgEngagement] = useState(0);
  const [totalVideos, setTotalVideos] = useState(0);

  useEffect(() => {
    // TODO: Fetch analyses from API
    const mockData: Analysis[] = [];
    setAnalyses(mockData);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full bg-slate-50/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
          <div className="text-xl font-headline font-extrabold tracking-tighter text-slate-900">
            BrickReel
          </div>
          <nav className="hidden md:flex items-center gap-8 font-headline font-semibold text-sm tracking-tight">
            <a className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1" href="#dashboard">
              Dashboard
            </a>
            <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#videos">
              My Videos
            </a>
            <a className="text-slate-500 hover:text-slate-900 transition-colors" href="#recommendations">
              Insights
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface font-semibold text-sm transition-all hover:bg-surface-container-highest">
              Settings
            </button>
            <button className="px-5 py-2.5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold text-sm transition-all scale-95 hover:scale-100 shadow-lg shadow-primary-container/20">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Action & Stats */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Primary Action */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded-xl bg-primary-container p-8 flex flex-col justify-between min-h-[320px]">
            <div className="absolute inset-0 opacity-20 transition-transform group-hover:scale-110 duration-700">
              <img
                alt="Modern architecture"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBrIsL_mNpfRjbIR7w3S5fAGeRM2ctvJdJWFvKm16Hj9IImIsDAAckdA40wNF_m3_GpoGwqVhEeAQ6VzAOPU0P0q6UHP_mtzyf2qUS7lHgvHrO0VJrmzMlNo1fFjY-WBFr3qz8DoLUeZKPUDL6Cp4ctHylPLEOLn0q03g0abz0-wT2PhgXHl1NMjPntlZ0fvZTVSWs9diTb1UHf-mhXG2UZpwn-l8Y7_xT0nOc2oMVGztsUFEwvj9S_gdzJoVqC-IF6E0r4Q8lO0s"
              />
            </div>

            <div className="relative z-10 max-w-md">
              <h1 className="text-4xl font-headline font-extrabold tracking-tight text-white mb-4 leading-tight">
                Transform Property Tours into Conversion Engines.
              </h1>
              <p className="text-slate-400 text-lg mb-8">
                Analyze your latest reel and let AI-powered insights help you improve viewer retention and engagement.
              </p>
            </div>

            <div className="relative z-10">
              <Link href="/analysis">
                <button className="flex items-center gap-3 bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-full font-bold text-lg hover:bg-tertiary-fixed-dim transition-all active:scale-95">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Analyze New Video
                </button>
              </Link>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl flex-1 flex flex-col justify-between">
              <div>
                <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">
                  Performance Trend
                </span>
                <div className="mt-4 flex items-end gap-4">
                  <span className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface">
                    {avgEngagement.toFixed(1)}%
                  </span>
                  <span className="text-emerald-600 font-bold flex items-center mb-2">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4" />
                    </svg>
                    +15%
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm mt-2">Avg. Engagement Rate</p>
              </div>
              <div className="h-24 w-full flex items-end gap-1 mt-6">
                <div className="w-full bg-secondary-container rounded-t-sm h-[40%]"></div>
                <div className="w-full bg-secondary-container rounded-t-sm h-[60%]"></div>
                <div className="w-full bg-secondary-container rounded-t-sm h-[45%]"></div>
                <div className="w-full bg-secondary-container rounded-t-sm h-[80%]"></div>
                <div className="w-full bg-primary h-[100%] rounded-t-sm"></div>
              </div>
            </div>

            <div className="bg-surface-container-low p-6 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-on-surface-variant text-sm font-medium">Total Analyzed</p>
                <p className="text-2xl font-headline font-bold">{totalVideos} Videos</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Recently Analyzed */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-headline font-extrabold tracking-tight">Recently Analyzed</h2>
              <p className="text-on-surface-variant mt-2">Deep visual insights from your latest uploads</p>
            </div>
            <button className="text-primary font-headline font-bold flex items-center gap-1 hover:gap-2 transition-all">
              View Library{' '}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-surface-container-lowest rounded-xl h-64 animate-pulse"></div>
              ))}
            </div>
          ) : analyses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-on-surface-variant text-lg">No analyses yet. Start by analyzing your first video!</p>
              <Link href="/analysis">
                <button className="mt-4 px-6 py-3 bg-primary text-on-primary font-bold rounded-full hover:opacity-90 transition-all">
                  Analyze First Video
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyses.map((analysis) => (
                <div key={analysis.id} className="bg-surface-container-lowest rounded-xl overflow-hidden group transition-all hover:translate-y-[-4px]">
                  <div className="relative aspect-video bg-gradient-to-br from-primary to-primary-container flex items-center justify-center">
                    <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                      SCORE: {analysis.score}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline font-bold text-lg leading-snug">{analysis.title}</h3>
                      <button className="text-on-surface-variant hover:text-primary transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-on-surface-variant font-medium">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {new Date(analysis.createdAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {analysis.views} views
                      </span>
                    </div>

                    {analysis.tags && analysis.tags.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-surface-container-high flex gap-2 flex-wrap">
                        {analysis.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-secondary-container text-on-secondary-fixed-variant text-[10px] font-bold rounded-full uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
