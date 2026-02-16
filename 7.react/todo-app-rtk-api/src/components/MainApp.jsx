import TodoList from "./TodoList";
import Filters from "./Filters";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/endpoints/todos";

export default function MainApp() {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });

  const todos = data?.data || [];
  const itemsLeft = todos.filter((todo) => !todo.isComplete).length;

  return (
    <main>
      {/* todolist */}
      <TodoList todos={todos} />
      {/* filters */}
      <Filters itemsLeft={itemsLeft} />
    </main>
  );
}
