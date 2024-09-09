// apiClient.ts - Helper for making API calls
import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from "axios";

// Create an instance of Axios with default configurations
const API: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request Interceptor for adding token
API.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig<any>
  ): Promise<InternalAxiosRequestConfig<any>> => {
    const token = localStorage.getItem("authToken");
    if (token && config.headers) {
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    }
    return Promise.resolve(config);
  },
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
);

// Response Interceptor for handling errors
API.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError): Promise<AxiosError> => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized");
    }
    return Promise.reject(error);
  }
);

export const AXIOS = {
  get: (url: string) => API.get(url),
  post: (url: string, data: any) => API.post(url, data),
  put: (url: string, data: any) => API.put(url, data),
  delete: (url: string) => API.delete(url),
};

export default API;
