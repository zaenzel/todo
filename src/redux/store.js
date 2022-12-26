import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";
import userReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    users: userReducer,
  },
});
