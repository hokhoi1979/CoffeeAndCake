const API_PREFIX = process.env.NEXT_PUBLIC_API_PREFIX || "";

export const createEndpoints = (resource: string) => {
  return `${API_PREFIX}/${resource}`;
};

export const endpoints = {
  // Supabase Auth endpoints (đường dẫn gốc auth/v1)
  auth: {
    login: "/auth/v1/token?grant_type=password",
    register: "/auth/v1/signup",
    refresh: "/auth/v1/token?grant_type=refresh_token",
  },
  // Supabase Database endpoints (đường dẫn rest/v1)
  users: "/rest/v1/profiles",
  products: "/rest/v1/products",
  orders: "/rest/v1/orders",
};
