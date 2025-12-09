import { useRef, useState } from "react";
import AddTodo from "./AddTodo";
import EditModal from "./EditModal";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  addTodo,
  toggleTodoCompletion,
  deleteTodo,
  editTodo,
}) {
  const dialogRef = useRef(null);
  const [dialog, setDialog] = useState({ id: null, text: "" });

  const handleEdit = (id, currentValue) => {
    setDialog({ id, text: currentValue });
    dialogRef.current?.showModal();
  };

  const saveTodo = () => {
    if (dialog.text?.trim()) {
      editTodo(dialog.id, dialog.text);
      dialog.current?.close();
    }
  };
  return (
    <section>
      {/* input */}
      <AddTodo addTodo={addTodo} />
      {/* list */}
      <div className="card bg-base-100 shadow-lg rounded-lg">
        <div className="card-body">
          <ul>
            {todos.length > 0 ? (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleTodoCompletion={toggleTodoCompletion}
                  deleteTodo={deleteTodo}
                  handleEdit={handleEdit}
                />
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
