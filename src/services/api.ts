import CookiesHandle from "@/utils/auth/cookiesHandler";
import { env } from "@/utils/envs";
import axios from "axios";

const API = axios.create({
  baseURL: env.BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(async (config) => {
  const accessToken = CookiesHandle.GetAccessToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default API;
