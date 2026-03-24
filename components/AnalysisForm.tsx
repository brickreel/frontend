'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormData {
  title: string;
  description: string;
  views: number;
  likes: number;
  watchTime: number;
}

interface AnalysisResult {
  id: string;
  score: number;
  engagementRate: number;
  insights: string[];
  suggestions: string[];
}

export default function AnalysisForm() {
  const [step, setStep] = useState<'form' | 'results'>('form');
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    views: 0,
    likes: 0,
    watchTime: 0,
  });
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'title' || name === 'description' ? value : Number(value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to analyze video');

      const data = await response.json();
      setResult(data);
      setStep('results');
    } catch (err) {
      setError('Failed to analyze video. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (step === 'results' && result) {
    return (
      <div className="min-h-screen bg-surface">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-outline-variant/10">
          <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/dashboard" className="text-xl font-headline font-extrabold tracking-tighter text-on-surface">
              BrickReel
            </Link>
            <Link href="/dashboard">
              <button className="px-5 py-2.5 rounded-full bg-primary text-on-primary font-semibold text-sm transition-all hover:opacity-90">
                Back to Dashboard
              </button>
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Score Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-headline font-extrabold text-on-surface mb-4">Analysis Results</h1>
            <p className="text-on-surface-variant text-lg mb-8">Here's what we found in your video performance</p>

            <div className="bg-surface-container-lowest rounded-2xl p-12 mb-8">
              <div className="text-6xl font-headline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-on-tertiary-container mb-4">
                {result.score}
              </div>
              <p className="text-on-surface-variant text-lg">Performance Score (0-100)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-surface-container-low p-6 rounded-xl">
                <p className="text-on-surface-variant text-sm font-medium">Engagement Rate</p>
                <p className="text-3xl font-headline font-bold text-primary mt-2">{(result.engagementRate * 100).toFixed(2)}%</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl">
                <p className="text-on-surface-variant text-sm font-medium">Views</p>
                <p className="text-3xl font-headline font-bold text-primary mt-2">--</p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl">
                <p className="text-on-surface-variant text-sm font-medium">Likes</p>
                <p className="text-3xl font-headline font-bold text-primary mt-2">--</p>
              </div>
            </div>
          </section>

          {/* Insights Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-6">Key Insights</h2>
            <div className="space-y-4">
              {result.insights.map((insight, idx) => (
                <div key={idx} className="bg-surface-container-lowest border border-secondary-container rounded-lg p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-secondary-container flex items-center justify-center">
                      <svg className="w-5 h-5 text-on-secondary-container" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 100 2 1 1 0 000-2zM8 8a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-on-surface font-semibold">{insight}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Suggestions Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-6">Recommendations</h2>
            <div className="space-y-4">
              {result.suggestions.map((suggestion, idx) => (
                <div key={idx} className="bg-surface-container-low border border-outline-variant rounded-lg p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-tertiary-fixed flex items-center justify-center">
                      <svg className="w-5 h-5 text-on-tertiary-fixed" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-on-surface font-semibold">{suggestion}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center pt-8">
            <p className="text-on-surface-variant text-lg mb-6">Ready to improve your next video?</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/analysis">
                <button className="px-8 py-3 bg-primary text-on-primary font-bold rounded-full hover:opacity-90 transition-all">
                  Analyze Another Video
                </button>
              </Link>
              <Link href="/dashboard">
                <button className="px-8 py-3 border border-outline-variant text-on-surface font-bold rounded-full hover:bg-surface-container transition-all">
                  View Dashboard
                </button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/dashboard" className="text-xl font-headline font-extrabold tracking-tighter text-on-surface">
            BrickReel
          </Link>
          <Link href="/dashboard">
            <button className="px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface font-semibold text-sm transition-all hover:bg-surface-container-highest">
              Back
            </button>
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-headline font-bold text-on-surface mb-4">Analyze Your Video</h1>
          <p className="text-on-surface-variant text-lg">
            Enter your video metrics and we'll provide actionable insights to improve performance.
          </p>
        </div>

        <form className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm" onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Video Title */}
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="title">
                Video Title *
              </label>
              <input
                className="w-full h-12 px-4 bg-surface border border-outline-variant/20 rounded-lg focus:ring-4 focus:ring-tertiary-fixed/30 focus:border-tertiary-fixed text-on-surface placeholder:text-outline transition-all"
                id="title"
                name="title"
                placeholder="e.g., Luxury Downtown Condo Tour"
                required
                type="text"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                className="w-full h-24 px-4 py-3 bg-surface border border-outline-variant/20 rounded-lg focus:ring-4 focus:ring-tertiary-fixed/30 focus:border-tertiary-fixed text-on-surface placeholder:text-outline transition-all resize-none"
                id="description"
                name="description"
                placeholder="Add a brief description of your video content..."
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Views */}
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="views">
                  Views *
                </label>
                <div className="relative">
                  <input
                    className="w-full h-12 px-4 bg-surface border border-outline-variant/20 rounded-lg focus:ring-4 focus:ring-tertiary-fixed/30 focus:border-tertiary-fixed text-on-surface placeholder:text-outline transition-all"
                    id="views"
                    name="views"
                    min="0"
                    placeholder="0"
                    required
                    type="number"
                    value={formData.views}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Likes */}
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="likes">
                  Likes *
                </label>
                <input
                  className="w-full h-12 px-4 bg-surface border border-outline-variant/20 rounded-lg focus:ring-4 focus:ring-tertiary-fixed/30 focus:border-tertiary-fixed text-on-surface placeholder:text-outline transition-all"
                  id="likes"
                  name="likes"
                  min="0"
                  placeholder="0"
                  required
                  type="number"
                  value={formData.likes}
                  onChange={handleInputChange}
                />
              </div>

              {/* Watch Time */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="watchTime">
                  Average Watch Time (seconds) *
                </label>
                <input
                  className="w-full h-12 px-4 bg-surface border border-outline-variant/20 rounded-lg focus:ring-4 focus:ring-tertiary-fixed/30 focus:border-tertiary-fixed text-on-surface placeholder:text-outline transition-all"
                  id="watchTime"
                  name="watchTime"
                  min="0"
                  step="0.1"
                  placeholder="0"
                  required
                  type="number"
                  value={formData.watchTime}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {error && (
              <div className="p-4 bg-error-container border border-error rounded-lg text-on-error">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              className="w-full h-12 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-full hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  </svg>
                  Analyzing...
                </>
              ) : (
                <>
                  <span>Analyze Video</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
