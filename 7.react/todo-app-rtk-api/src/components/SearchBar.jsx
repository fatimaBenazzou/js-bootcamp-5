import { useTodoParams } from "../hooks/useUrlParams";

export default function SearchBar() {
  const { search, setSearch } = useTodoParams();

  return (
    <form className="flex items-center gap-2 flex-1">
      <input
        type="text"
        placeholder="Search Todos..."
        className="flex-1 input input-ghost w-full"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search && (
        <button
          className="btn btn-circle btn-xs btn-ghost"
          onClick={() => setSearch("")}
        >
          x
        </button>
      )}
    </form>
  );
}
