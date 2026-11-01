export type LoginValues = {
  email: string;
  password: string;
  remember?: boolean;
};

export type LoginDTO = Omit<LoginValues, "remember">;

export type SignupValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type RegisterDto = SignupValues;

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export type LoginResponse = {
  user: import("@/types/user").UserDetail;
  tokens: AuthTokens;
};

export type RefreshTokenDto = {
  refreshToken: string;
};

export type RefreshTokenResponse = {
  tokens: AuthTokens;
};

export type AuthState = {
  user: import("@/types/user").UserDetail | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  isHydrated: boolean;
  setAuth: (
    user: import("@/types/user").UserDetail,
    tokens: AuthTokens,
  ) => void;
  setTokens: (tokens: AuthTokens) => void;
  logout: () => void;
  hydrate: () => void;
};
