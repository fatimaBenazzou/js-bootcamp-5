import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo as addTodoAction,
  toggleTodoCompletion as toggleTodoCompletionAction,
  editTodo as editTodoAction,
  deleteTodo as deleteTodoAction,
  clearCompleted as clearCompletedAction,
  setFilter as setFilterAction,
  setSortBy as setSortByAction,
  setSearchQuery as setSearchQueryAction,
} from "../app/slices/todo";

export const useTodos = () => {
  const { todos, filter, sortBy, searchQuery } = useSelector(
    (state) => state.todos
  );

  const dispatch = useDispatch();

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

  const addTodo = useCallback(
    (text) => dispatch(addTodoAction(text)),
    [dispatch]
  );
  const toggleTodoCompletion = useCallback(
    (id) => dispatch(toggleTodoCompletionAction(id)),
    [dispatch]
  );
  const editTodo = useCallback(
    (id, newText) => dispatch(editTodoAction({ id, newText })),
    [dispatch]
  );
  const deleteTodo = useCallback(
    (id) => dispatch(deleteTodoAction(id)),
    [dispatch]
  );
  const clearCompleted = useCallback(
    () => dispatch(clearCompletedAction()),
    [dispatch]
  );
  const setFilter = useCallback(
    (filter) => dispatch(setFilterAction(filter)),
    [dispatch]
  );
  const setSortBy = useCallback(
    (sortBy) => dispatch(setSortByAction(sortBy)),
    [dispatch]
  );
  const setSearchQuery = useCallback(
    (query) => dispatch(setSearchQueryAction(query)),
    [dispatch]
  );

  return {
    todos: displayedTodos,
    filter,
    sortBy,
    searchQuery,
    itemsLeft,
    // actions
    addTodo,
    toggleTodoCompletion,
    editTodo,
    deleteTodo,
    clearCompleted,
    setFilter,
    setSortBy,
    setSearchQuery,
  };
};
