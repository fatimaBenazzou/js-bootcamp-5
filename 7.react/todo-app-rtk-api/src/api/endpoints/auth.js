import apiConfig from "../config";

export const login = async (credentials) => {
  const response = await apiConfig.post("/auth/login", credentials);
  if (response.data.success && response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

export const register = async (userData) => {
  const response = await apiConfig.post("/auth/register", userData);
  if (response.data.success && response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

export const checkAuth = async () => {
  const response = await apiConfig.get("/auth");
  return response.data;
};
