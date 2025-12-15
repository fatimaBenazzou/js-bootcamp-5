export default function EditModal({ dialogRef, saveTodo, dialog, setDialog }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && dialog.text?.trim()) {
      e.preventDefault();
      saveTodo();
      dialogRef.current?.close();
    }
  };
  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Edit Todo</h3>
        <textarea
          value={dialog.text}
          onChange={(e) => setDialog((p) => ({ ...p, text: e.target.value }))}
          onKeyDown={handleKeyDown}
          placeholder="Enter your todo text..."
          className="textarea resize-none h-24 w-full "
        />
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Cancel</button>
            <button
              className="btn btn-primary"
              onClick={saveTodo}
              disabled={!dialog.text?.trim()}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
