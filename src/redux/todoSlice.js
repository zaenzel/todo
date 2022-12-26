import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";

export const fetchTodos = createAsyncThunk(
  "todos/fetchAsyncTodosByUser",
  async (id) => {
    const res = await axios.get(`${url}todos?userId=${id}`);
    return res.data;
  }
);

const initialState = {
  todos: {},
  loading: false,
};

const todosSlice = createSlice({
  name: "haha",
  initialState,
  reducers: {
    removeLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      return { ...state, loading: true };
    },
    [fetchTodos.fulfilled]: (state, { payload }) => {
      return { ...state, todos: payload };
    },
    [fetchTodos.rejected]: () => {
      console.log("failed");
    },
  },
});

export const { removeLoading } = todosSlice.actions;
export const getTodosByUser = (state) => state.todos.todos;
export const getLoadingTodo = (state) => state.todo.loading;
export default todosSlice.reducer;
