import React, { useContext } from "react";
import TodoContext from "../contexts/TodoContext";

export default function useTodos() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }

  return context;
}
