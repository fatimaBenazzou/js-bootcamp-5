export default function Header({ theme, toggleTheme }) {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold text-white tracking-wider drop-shadow-lg uppercase">
        Todo
      </h1>
      <button
        onClick={toggleTheme}
        className="btn btn-ghost hover:bg-transparent hover:border-0 hover:scale-110 transition-transform duration-200"
      >
        <img
          src={
            theme === "dark"
              ? "./images/icon-sun.svg"
              : "./images/icon-moon.svg"
          }
          alt="change theme color"
          className="w-6 h-6 transition-transform duration-300"
        />
      </button>
    </header>
  );
}
