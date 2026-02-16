import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, updateTodo } from "../api/endpoints/todos";

export default function TodoItem({ todo, handleEdit }) {
  const queryClient = useQueryClient();

  const { mutate: toggleMutation } = useMutation({
    mutationFn: () => updateTodo(todo._id, { isComplete: !todo.isComplete }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
  const { mutate: deleteMutation } = useMutation({
    mutationFn: () => deleteTodo(todo._id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  return (
    <li className="flex justify-between items-center py-4 border-b border-base-200">
      <div className="flex items-center gap-2">
        <input
          checked={todo.isComplete}
          type="checkbox"
          onChange={toggleMutation}
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
          onClick={() => handleEdit(todo._id, todo.text)}
        >
          <span className="icon-[iwwa--edit] text-base-content"></span>
        </button>
        <button
          className="btn btn-ghost btn-sm hover:btn-error hover:scale-110 transition-all"
          onClick={() => deleteMutation(todo._id)}
        >
          <span className="icon-[iwwa--delete] text-base-content"></span>
        </button>
      </div>
    </li>
  );
}
