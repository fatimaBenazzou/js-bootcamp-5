import useTodos from "../hooks/useTodos";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useTodos();

  return (
    <form className="flex items-center gap-2 flex-1">
      <input
        type="text"
        placeholder="Search Todos..."
        className="flex-1 input input-ghost w-full"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      {searchQuery && (
        <button
          className="btn btn-circle btn-xs btn-ghost"
          onClick={() => setSearchQuery("")}
        >
          x
        </button>
      )}
    </form>
  );
}
