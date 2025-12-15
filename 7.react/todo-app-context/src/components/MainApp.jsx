import React, { useCallback, useEffect, useMemo, useState } from "react";
import TodoList from "./TodoList";
import Filters from "./Filters";

export default function MainApp() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("alphabetical");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((text) => {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now().toString(),
      text: text.trim(),
      isComplete: false,
      createdAt: new Date().toISOString(),
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  }, []);

  const toggleTodoCompletion = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  }, []);

  const editTodo = useCallback((id, newText) => {
    if (newText.trim() === "") return;

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }, []);

  const deleteTodoItem = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isComplete));
  }, []);

  const displayedTodos = useMemo(() => {
    const filteredTodos = todos.filter((todo) => {
      if (filter === "active") return !todo.isComplete;
      if (filter === "completed") return todo.isComplete;
      return true;
    });

    const searched =
      searchQuery.trim() === ""
        ? filteredTodos
        : filteredTodos.filter((todo) =>
            todo.text.toLowerCase().includes(searchQuery.toLowerCase())
          );

    const sorted = [...searched];
    switch (sortBy) {
      case "dateNewest":
        return sorted.sort(
          (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
        );
      case "dateOldest":
        return sorted.sort(
          (a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0)
        );
      case "alphabetical":
        return sorted.sort((a, b) =>
          a.text.localeCompare(b.text, undefined, { sensitivity: "base" })
        );
      default:
        sorted;
    }
  }, [todos, filter, searchQuery, sortBy]);

  const itemsLeft = useMemo(
    () => todos.filter((todo) => !todo.isComplete).length,
    [todos]
  );

  return (
    <main>
      {/* todolist */}
      <TodoList
        todos={displayedTodos}
        addTodo={addTodo}
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodoItem}
        editTodo={editTodo}
        setSortBy={setSortBy}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
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
