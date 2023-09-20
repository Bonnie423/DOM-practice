import { useState } from 'react'

export function NewToDoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(newItem)
    setNewItem('')
  }
  return (
    <form action="" className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          type="text"
          id="item"
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}
