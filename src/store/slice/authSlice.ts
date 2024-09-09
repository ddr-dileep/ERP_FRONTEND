import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "../helpers/authHelpers";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state: any) => {
      state.token = null;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(loginUser.pending, (state: any) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state: any, action: PayloadAction<string>) => {
          state.loading = false;
          state.token = action.payload;
        }
      )
      .addCase(loginUser.rejected, (state: any, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
