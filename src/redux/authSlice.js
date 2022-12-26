import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";

export const fetchUser = createAsyncThunk("user/fetchAsyncUser", async (id) => {
  const res = await axios.get(`${url}users?id=${id}`);
  return res.data;
});

const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload));
      state.user = payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = {};
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, { payload }) => {
      return { ...state, user: payload };
    },
    [fetchUser.rejected]: () => {
      console.log("failed");
    },
  },
});

export const { login, logout } = authSlice.actions;
export const getUser = (state) => state.users.user;
export default authSlice.reducer;
