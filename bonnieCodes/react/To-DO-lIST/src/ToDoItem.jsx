export function TodoItem({ compeleted, id, title, toggleToDo, deleteToDo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={compeleted}
          onChange={(e) => toggleToDo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteToDo(id)}>
        Delete
      </button>
    </li>
  )
}
