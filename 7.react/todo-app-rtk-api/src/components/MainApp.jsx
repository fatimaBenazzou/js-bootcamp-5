import TodoList from "./TodoList";
import Filters from "./Filters";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/endpoints/todos";
import { useTodoParams } from "../hooks/useUrlParams";

export default function MainApp() {
  const { apiParams } = useTodoParams();

  const { data } = useQuery({
    queryKey: ["todos", apiParams],
    queryFn: () => getTodos(apiParams),
  });

  const todos = data?.data || [];
  const pagination = data?.pagination;
  const itemsLeft = todos.filter((todo) => !todo.isComplete).length;

  return (
    <main>
      {/* todolist */}
      <TodoList todos={todos} pagination={pagination} />
      {/* filters */}
      <Filters itemsLeft={itemsLeft} />
    </main>
  );
}
