"use client";

import { useState } from "react";
import { VideoData } from "@/lib/api";

interface AnalysisFormProps {
  onSubmit: (data: VideoData) => void;
  isLoading: boolean;
}

const defaultValues: VideoData = {
  title: "",
  description: "",
  views: 0,
  likes: 0,
  watchTime: 0,
};

export default function AnalysisForm({ onSubmit, isLoading }: AnalysisFormProps) {
  const [formData, setFormData] = useState<VideoData>(defaultValues);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-6"
    >
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Video Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Modern 3-Bedroom Home Tour in Austin"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your video content, key features, and target audience…"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition resize-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="views"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Views
          </label>
          <input
            id="views"
            name="views"
            type="number"
            min={0}
            required
            value={formData.views}
            onChange={handleChange}
            placeholder="0"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        <div>
          <label
            htmlFor="likes"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Likes
          </label>
          <input
            id="likes"
            name="likes"
            type="number"
            min={0}
            required
            value={formData.likes}
            onChange={handleChange}
            placeholder="0"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        <div>
          <label
            htmlFor="watchTime"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Watch Time (seconds)
          </label>
          <input
            id="watchTime"
            name="watchTime"
            type="number"
            min={0}
            required
            value={formData.watchTime}
            onChange={handleChange}
            placeholder="0"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Analyzing…
          </>
        ) : (
          "Analyze Video"
        )}
      </button>
    </form>
  );
}
