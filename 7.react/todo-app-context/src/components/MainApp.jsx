import TodoList from "./TodoList";
import Filters from "./Filters";
import TodoProvider from "../providers/TodoProvider";

export default function MainApp() {
  return (
    <TodoProvider>
      <main>
        {/* todolist */}
        <TodoList />
        {/* filters */}
        <Filters />
      </main>
    </TodoProvider>
  );
}
