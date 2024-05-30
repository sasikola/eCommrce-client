// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RestApi from "../api/RestApi";

// Async thunk for fetch all products
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await RestApi.get("/user/allProducts", config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

// async thunk for fetch single product
export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { userInfo } = getState().auth;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await RestApi.get(`/user/singleProduct/${id}`, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Auth slice with initial state
const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    productList: null,
    product: null,
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
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productList = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Export actions
export const { clearError } = productSlice.actions;
export default productSlice.reducer;
