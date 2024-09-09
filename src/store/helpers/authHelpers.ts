import { createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS } from "../../configs/axois";

// Async thunk to handle login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }: any
  ) => {
    try {
      const response = await AXIOS.post("/user/login", credentials); // Use the helper for API call
      const data = response.data?.data;
      localStorage.setItem("authToken", data.token);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || "Login failed");
    }
  }
);
