import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import todosReducer from "./slices/todo";
import authReducer from "./slices/auth";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todos: todosReducer,
    auth: authReducer,
  },
});
