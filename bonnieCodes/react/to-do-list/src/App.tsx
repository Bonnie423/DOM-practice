import './App.css'

import React, { useState } from 'react'
import InputFeild from './components/InputFeild'
import { Todo } from './components/model'
import ToDoList from './components/ToDoList'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }
  }
  console.log(todos)

  return (
    <div className="App">
      <span className="heading"> Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
