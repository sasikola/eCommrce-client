// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestApi from "../api/RestApi";

// Async thunk for user profile
export const userProfile = createAsyncThunk(
  "profile/userProfile",
  async (_, { getState, rejectWithValue }) => {
    try {
      // Set headers for the request
      const { userInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      // Make request to the backend
      const { data } = await RestApi.get("/user/profile", config);
      return data;
    } catch (error) {
      // Return custom error message from the API if any
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

// async thunk to update the user profile

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (formData, { getState, rejectWithValue }) => {
    try {
      // Set headers for the request
      const { userInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      // Make request to the backend
      const { data } = await RestApi.put(
        "/user/profile/update",
        formData,
        config
      );
      return data;
    } catch (error) {
      // Return custom error message from the API if any
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);
export const updatePassword = createAsyncThunk(
  "profile/updatePassword",
  async (formData, { getState, rejectWithValue }) => {
    try {
      // Set headers for the request
      const { userInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      // Make request to the backend
      const { data } = await RestApi.post(
        "/user/profile/update/password",
        formData,
        config
      );
      return data;
    } catch (error) {
      // Return custom error message from the API if any
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Auth slice with initial state
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    profile: null,
    error: null,
    success: null,
  },
  reducers: {
    clearError: (state) => {
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(userProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.profile = payload;
        state.success = true;
      })
      .addCase(userProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.error;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.error;
      })
      .addCase(updatePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updatePassword.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updatePassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.error;
      });
  },
});

// Export actions
export const { clearError } = profileSlice.actions;
export default profileSlice.reducer;
