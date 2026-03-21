import { AnalysisResult } from "@/lib/api";

interface AnalysisResultProps {
  result: AnalysisResult;
}

function ScoreBadge({ score }: { score: number }) {
  const color =
    score >= 80
      ? "text-green-700 bg-green-100 ring-green-200"
      : score >= 50
      ? "text-yellow-700 bg-yellow-100 ring-yellow-200"
      : "text-red-700 bg-red-100 ring-red-200";

  return (
    <div className="flex flex-col items-center justify-center">
      <span
        className={`inline-flex items-center justify-center w-24 h-24 rounded-full text-4xl font-extrabold ring-4 ${color}`}
      >
        {score}
      </span>
      <p className="mt-2 text-sm font-medium text-gray-500">Overall Score</p>
    </div>
  );
}

export default function AnalysisResultCard({ result }: AnalysisResultProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-8">
      <h2 className="text-xl font-bold text-gray-800">Analysis Results</h2>

      <div className="flex justify-center">
        <ScoreBadge score={result.score} />
      </div>

      <div>
        <h3 className="text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
          Insights
        </h3>
        {result.insights.length > 0 ? (
          <ul className="space-y-2">
            {result.insights.map((insight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-gray-700 bg-blue-50 rounded-lg px-4 py-3"
              >
                <span className="mt-0.5 shrink-0 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {insight}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400 italic">No insights returned.</p>
        )}
      </div>

      <div>
        <h3 className="text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-purple-500" />
          Suggestions
        </h3>
        {result.suggestions.length > 0 ? (
          <ul className="space-y-2">
            {result.suggestions.map((suggestion, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-gray-700 bg-purple-50 rounded-lg px-4 py-3"
              >
                <span className="mt-0.5 shrink-0 text-purple-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {suggestion}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400 italic">
            No suggestions returned.
          </p>
        )}
      </div>
    </div>
  );
}
