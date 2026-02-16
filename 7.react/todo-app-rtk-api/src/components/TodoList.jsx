import { useCallback, useRef, useState } from "react";
import AddTodo from "./AddTodo";
import EditModal from "./EditModal";
import TodoItem from "./TodoItem";
import SortingDropdown from "./SortingDropdown";
import SearchBar from "./SearchBar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "../api/endpoints/todos";

export default function TodoList({ todos }) {
  const queryClient = useQueryClient();

  const { mutate: editMutation } = useMutation({
    mutationFn: ({ id, text }) => updateTodo(id, { text }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const dialogRef = useRef(null);
  const [dialog, setDialog] = useState({ id: null, text: "" });

  const handleEdit = useCallback((id, currentValue) => {
    setDialog({ id, text: currentValue });
    dialogRef.current?.showModal();
  }, []);

  const saveTodo = () => {
    if (dialog.text?.trim()) {
      editMutation(dialog.id, dialog.text);
      dialog.current?.close();
    }
  };

  return (
    <section>
      {/* input */}
      <AddTodo />
      {/* list */}
      <div className="card bg-base-100 shadow-lg rounded-lg">
        <div className="card-body">
          <div className="flex justify-between items-center gap-2">
            <SearchBar />
            <SortingDropdown />
          </div>
          <ul>
            {todos.length > 0 ? (
              todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} handleEdit={handleEdit} />
              ))
            ) : (
              <li className="p-12 text-center">
                <p className="text-base-content/70 font-medium">
                  No Todos yet, Create your first task above !
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
      <EditModal
        dialogRef={dialogRef}
        dialog={dialog}
        setDialog={setDialog}
        saveTodo={saveTodo}
      />
    </section>
  );
}
