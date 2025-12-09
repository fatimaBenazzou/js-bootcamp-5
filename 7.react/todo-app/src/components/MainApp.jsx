import React, { useState } from "react";
import TodoList from "./TodoList";

export default function MainApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now().toString(),
      text: text.trim(),
      isComplete: false,
      createdAt: new Date().toISOString(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const toggleTodoCompletion = (id) => {};

  console.log(todos);
  return (
    <main>
      {/* todolist */}
      <TodoList todos={todos} addTodo={addTodo} />
      {/* filters */}
    </main>
  );
}
