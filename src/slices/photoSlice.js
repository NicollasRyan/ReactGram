import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoService from "../services/photoService";

const initialState = {
  photos: [],
  photo: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    restMessage: (state) => {
      state.message = null;
    },
  },
});
