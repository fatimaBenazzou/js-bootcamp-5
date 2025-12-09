import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  addTodo,
  toggleTodoCompletion,
  deleteTodo,
}) {
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
    </section>
  );
}
