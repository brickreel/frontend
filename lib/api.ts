export interface VideoData {
  title: string;
  description: string;
  views: number;
  likes: number;
  watchTime: number;
}

export interface AnalysisResult {
  score: number;
  insights: string[];
  suggestions: string[];
}

export async function analyzeVideo(data: VideoData): Promise<AnalysisResult> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL environment variable is not set.");
  }

  const response = await fetch(`${apiUrl}/analysis`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `API request failed with status ${response.status}: ${errorText}`
    );
  }

  return response.json() as Promise<AnalysisResult>;
}
