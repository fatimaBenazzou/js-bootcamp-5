import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import Filters from "./Filters";

export default function MainApp() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const toggleTodoCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    if (newText.trim() === "") return;

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodoItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isComplete));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.isComplete;
    if (filter === "completed") return todo.isComplete;
    return true;
  });

  const itemsLeft = todos.filter((todo) => !todo.isComplete).length;
  return (
    <main>
      {/* todolist */}
      <TodoList
        todos={filteredTodos}
        addTodo={addTodo}
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodoItem}
        editTodo={editTodo}
      />
      {/* filters */}
      <Filters
        itemsLeft={itemsLeft}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </main>
  );
}
