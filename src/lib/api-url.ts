// Use the environment variable if provided, otherwise smartly detect the environment.
// If running locally (e.g., local build preview), use localhost:3000 where the main API is.
// If in production, point to the live Render backend.
const ENV_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");

const API_BASE_URL = ENV_URL || (
  typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://nyotafund-md.onrender.com"
);

export function apiUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
}
