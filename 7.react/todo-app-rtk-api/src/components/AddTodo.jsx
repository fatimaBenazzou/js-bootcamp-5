import { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export default function AddTodo() {
  const { addTodo } = useTodos();
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (newTodoText.trim()) {
      addTodo(newTodoText);
      setNewTodoText("");
    }
  };
  return (
    <div className="card bg-base-100 shadow-lg p-4 mb-4 rounded-lg">
      <form onSubmit={handleAddTodo} className="flex items-center gap-2">
        <input
          value={newTodoText}
          type="text"
          className="input input-ghost w-full flex-1"
          placeholder="Create a new todo..."
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTodo}
        />
        <button
          type="submit"
          className="btn btn-circle btn-ghost btn-sm border border-zinc-400"
        >
          +
        </button>
      </form>
    </div>
  );
}
