export default function TodoItem({
  todo,
  toggleTodoCompletion,
  deleteTodo,
  handleEdit,
}) {
  return (
    <li className="flex justify-between items-center py-4 border-b border-base-200">
      <div className="flex items-center gap-2">
        <input
          checked={todo.isComplete}
          type="checkbox"
          onChange={() => toggleTodoCompletion(todo.id)}
          className={`checkbox checkbox-primary hover:scale-110 cursor-pointer transition-transform `}
        />
        <p className={todo.isComplete ? "line-through text-gray-400" : ""}>
          {todo.text}
        </p>
      </div>
      {/* actions */}
      <div className="flex">
        <button
          className="btn btn-ghost btn-sm hover:btn-primary hover:scale-110 transition-all"
          onClick={() => handleEdit(todo.id, todo.text)}
        >
          <span className="icon-[iwwa--edit] text-base-content"></span>
        </button>
        <button
          className="btn btn-ghost btn-sm hover:btn-error hover:scale-110 transition-all"
          onClick={() => deleteTodo(todo.id)}
        >
          <span className="icon-[iwwa--delete] text-base-content"></span>
        </button>
      </div>
    </li>
  );
}
