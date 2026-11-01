import axios from "axios";
import { endpoints } from "./endpoints";

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
  },
});

apiClient.interceptors.request.use((config) => {
  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  config.headers.apikey = supabaseKey;
  config.headers.Authorization = `Bearer ${accessToken || supabaseKey}`;
  return config;
});

apiClient.interceptors.response.use(undefined, async (error) => {
  const originalRequest = error.config;
  const isAuthEndpoint = originalRequest?.url?.includes("/auth/v1/");

  if (
    error.response?.status === 401 &&
    originalRequest &&
    !originalRequest._retry &&
    !isAuthEndpoint
  ) {
    originalRequest._retry = true;
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      return Promise.reject(error);
    }

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoints.auth.refresh}`,
        { refresh_token: refreshToken },
        {
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
          },
        },
      );

      localStorage.setItem("accessToken", data.access_token);
      localStorage.setItem("refreshToken", data.refresh_token);
      originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
      return apiClient(originalRequest);
    } catch {
      localStorage.clear();
      return Promise.reject(error);
    }
  }

  return Promise.reject(error);
});
