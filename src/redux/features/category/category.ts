import api from "@/lib/interceptor";
import {
  MainCategoryItem,
  SubCategoryItem,
} from "@/redux/features/category/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

// Get Main Category
export const getMainCategory = createAsyncThunk<
  AxiosResponse<MainCategoryItem[]>,
  void,
  { rejectValue: string }
>("category/mainCategory/get", async (_, thunkAPI) => {
  try {
    const response = await api.get("/api/main-categories/", {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message ||
        error.message ||
        "Failed to fetch main categories"
    );
  }
});

// Create Main Category
export const createMainCategory = createAsyncThunk<
  AxiosResponse<MainCategoryItem>,
  FormData,
  { rejectValue: string }
>("category/mainCategory/create", async (categoryData, thunkAPI) => {
  try {
    const response = await api.post("/api/main-categories/", categoryData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message ||
        error.message ||
        "Failed to create main category"
    );
  }
});

// Update Main Category
export const updateMainCategory = createAsyncThunk<
  AxiosResponse<MainCategoryItem>,
  { id: string; categoryData: FormData },
  { rejectValue: string }
>("category/mainCategory/update", async ({ id, categoryData }, thunkAPI) => {
  try {
    const response = await api.patch(
      `/api/main-categories/${id}`,
      categoryData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message ||
        error.message ||
        "Failed to update main category"
    );
  }
});

// Delete Main Category
export const deleteMainCategory = createAsyncThunk<
  AxiosResponse<void>,
  string,
  { rejectValue: string }
>("category/mainCategory/delete", async (id, thunkAPI) => {
  try {
    const response = await api.delete(`/api/main-categories/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message ||
        error.message ||
        "Failed to delete main category"
    );
  }
});

//================================================================
//FOR SUB CATEGORY
//================================================================

// Get Sub Category
export const getSubCategory = createAsyncThunk<
  AxiosResponse<SubCategoryItem[]>,
  void,
  { rejectValue: string }
>("category/subCategory/get", async (_, thunkAPI) => {
  try {
    const response = await api.get("/api/sub-categories/", {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message ||
        error.message ||
        "Failed to fetch sub categories"
    );
  }
});

// Create Sub Category
export const createSubCategory = createAsyncThunk<
  AxiosResponse<SubCategoryItem>,
  FormData,
  { rejectValue: string }
>("category/subCategory/create", async (categoryData, thunkAPI) => {
  try {
    const response = await api.post("/api/sub-categories/", categoryData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message ||
        error.message ||
        "Failed to create sub category"
    );
  }
});

// Update Sub Category
export const updateSubCategory = createAsyncThunk<
  AxiosResponse<SubCategoryItem>,
  { id: string; categoryData: FormData },
  { rejectValue: string }
>("category/subCategory/update", async ({ id, categoryData }, thunkAPI) => {
  try {
    const response = await api.put(`/api/sub-categories/${id}`, categoryData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message ||
        error.message ||
        "Failed to update sub category"
    );
  }
});

// Delete Sub Category
export const deleteSubCategory = createAsyncThunk<
  AxiosResponse<void>,
  string,
  { rejectValue: string }
>("category/subCategory/delete", async (id, thunkAPI) => {
  try {
    const response = await api.delete(`/api/sub-categories/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message ||
        error.message ||
        "Failed to delete sub category"
    );
  }
});
