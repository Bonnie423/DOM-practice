// import React from 'react'

import { useEffect, useState } from 'react'
import { NewToDoForm } from './newToDoForm'
import { ToDoList } from './ToDoList'

export default function App() {
  const [todos, setToDos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setToDos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, compeleted: false },
      ]
    })
  }

  function toggleToDo(id, compeleted) {
    setToDos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, compeleted }
        return todo
      })
    })
  }

  function deleteToDo(id) {
    setToDos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }

  return (
    <>
      <NewToDoForm onSubmit={addTodo} />
      <h1 className="header"> Todo List</h1>
      <ToDoList todos={todos} toggleToDo={toggleToDo} deleteToDo={deleteToDo} />
    </>
  )
}
