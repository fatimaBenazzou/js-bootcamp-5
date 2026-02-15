import { useTodos } from "../hooks/useTodos";

const sortOptions = [
  { value: "dateNewest", label: "Newest First", icon: "⬇️" },
  { value: "dateOldest", label: "Oldest First", icon: "⬆️" },
  { value: "alphabetical", label: "A-Z", icon: "🔤" },
];

export default function SortingDropdown() {
  const { setSortBy } = useTodos();

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1 btn-primary">
        Sort by
      </div>
      <ul
        tabIndex="-1"
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {sortOptions.map((option, index) => (
          <li
            key={option.value + index}
            onClick={() => setSortBy(option.value)}
          >
            <a>
              <span className="mr-1">{option.icon}</span>
              <span className="hidden sm:inline">{option.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
