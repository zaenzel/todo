import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "./api";

export const fetchTodos = createAsyncThunk(
  "todos/fetchAsyncTodosByUser",
  async (id) => {
    const res = await axios.get(`${url}todos?userId=${id}`);
    return res.data;
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${url}todos?userId=${data.id}`,
        {
          id: data.id,
          userId: data.userId,
          title: data.title,
          completed: data.completed,
        },
        setHeaders()
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  todos: [],
  loading: false,
  addStatus: false,
};

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    removeLoading: (state) => {
      state.loading = false;
    },
    clearState: (state) => {
      state.todos = {};
    },
    addTodoNoApi: (state, { payload }) => {
      state.todos.unshift(payload);
      state.addStatus = true;
    },
    deleteTodo: (state, { payload }) => {
      state.todos.filter((e) => {
        return e.id !== payload;
      });
    },
    editTodo: (state, { payload }) => {
      const todo = state.todos.filter((e) => {
        return e.id === payload;
      });
      todo.completed = true;
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
      return console.log("failed");
    },
    [addTodo.fulfilled]: (state, { payload }) => {
      // return { ...state, todos: payload };
      return console.log("berhaasil add");
    },
    [addTodo.rejected]: () => {
      return console.log("failed");
    },
  },
});

export const { removeLoading, clearState, addTodoNoApi, deleteTodo, editTodo } =
  todosSlice.actions;
export const getTodosByUser = (state) => state.todos.todos;
export const getLoadingTodo = (state) => state.todo.loading;
export const getAddStatus = (state) => state.todos.addStatus;
export default todosSlice.reducer;
