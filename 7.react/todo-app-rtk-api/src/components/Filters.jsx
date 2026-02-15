import { useTodos } from "../hooks/useTodos";

const buttons = ["all", "active", "completed"];

export default function Filters() {
  const { itemsLeft, filter, setFilter, clearCompleted } = useTodos();

  return (
    <section className="card text-center text-gray-400 mt-8 flex bg-base-100 shadow-lg rounded-lg">
      <div className="card-body">
        <p>{itemsLeft} items left</p>
        <ul role="tablist" className="tabs flex justify-center ">
          {buttons.map((button, i) => (
            <li
              key={button + i}
              role="tab"
              className={`tab capitalize font-medium hover:font-extrabold ${
                filter === button
                  ? "text-primary tab-active font-extrabold"
                  : ""
              } `}
              onClick={() => setFilter(button)}
            >
              {button}
            </li>
          ))}
        </ul>
        <button className="btn btn-ghost" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </section>
  );
}
