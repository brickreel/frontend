"use client";

import { useState } from "react";
import AnalysisForm from "@/components/AnalysisForm";
import AnalysisResultCard from "@/components/AnalysisResult";
import { analyzeVideo, VideoData, AnalysisResult } from "@/lib/api";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(data: VideoData) {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const analysisResult = await analyzeVideo(data);
      setResult(analysisResult);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          BrickReel
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          Analyze your real estate video content
        </p>
        <p className="mt-2 text-sm text-gray-400 max-w-xl mx-auto">
          Enter your video details below to receive an AI-powered performance
          score, key insights, and actionable suggestions.
        </p>
      </div>

      <AnalysisForm onSubmit={handleSubmit} isLoading={isLoading} />

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700 flex items-start gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 shrink-0 text-red-400 mt-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="font-semibold">Something went wrong</p>
            <p className="mt-0.5 text-red-600">{error}</p>
          </div>
        </div>
      )}

      {result && (
        <div className="mt-8">
          <AnalysisResultCard result={result} />
        </div>
      )}
    </section>
  );
}
