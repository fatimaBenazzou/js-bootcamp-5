import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import todosReducer from "./slices/todo";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todos: todosReducer,
  },
});
