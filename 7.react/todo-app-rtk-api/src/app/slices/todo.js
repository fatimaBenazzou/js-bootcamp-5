import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  filter: "all",
  sortBy: "dateNewest",
  searchQuery: "",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const text = action.payload.trim();
      if (text === "") return;

      const newTodo = {
        id: Date.now().toString(),
        text: text.trim(),
        isComplete: false,
        createdAt: new Date().toISOString(),
      };

      state.todos.unshift(newTodo);
    },
    toggleTodoCompletion: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isComplete = !todo.isComplete;
      }
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const text = newText.trim();
      if (text === "") return;

      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.isComplete);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleTodoCompletion,
  editTodo,
  deleteTodo,
  clearCompleted,
  setFilter,
  setSortBy,
  setSearchQuery,
} = todoSlice.actions;

export default todoSlice.reducer;
