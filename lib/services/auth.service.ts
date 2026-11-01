import { apiClient } from "../apis/client";
import { endpoints } from "../apis/endpoints";
import axios from "axios";
import type { LoginDTO, RegisterDto } from "@/types/auth";

const getAuthErrorMessage = (error: unknown, fallback: string) => {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.msg || error.response?.data?.message;
    if (typeof message === "string") return message;
  }
  return fallback;
};

export const authService = {
  // 1. Đăng nhập
  login: async (credentials: LoginDTO) => {
    try {
      const { data } = await apiClient.post(endpoints.auth.login, {
        email: credentials.email,
        password: credentials.password,
      });

      return {
        user: data.user,
        tokens: {
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
        },
      };
    } catch (error) {
      throw new Error(
        getAuthErrorMessage(
          error,
          "Unable to sign in. Check your email and password.",
        ),
      );
    }
  },

  // 2. Đăng ký
  register: async (payload: RegisterDto) => {
    try {
      const { data } = await apiClient.post(endpoints.auth.register, {
        email: payload.email,
        password: payload.password,
        data: {
          full_name: payload.name,
        },
      });

      return {
        user: data.user,
        tokens: {
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
        },
      };
    } catch (error) {
      throw new Error(
        getAuthErrorMessage(error, "Unable to create your account."),
      );
    }
  },

  // 3. Lấy profile chi tiết từ bảng profiles (nếu cần)
  getProfile: async (userId: string) => {
    const { data } = await apiClient.get(
      `${endpoints.users}?id=eq.${userId}&select=*`,
    );
    return data[0];
  },
};
