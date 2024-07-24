import { useState, useEffect } from 'react'
import Header from './components/Header.jsx';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import './App.css'

import todoService from './services/todos.js';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoService
     .getAllTodos()
     .then(initialTodos => setTodos(initialTodos))
  }, [])
  
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    todoService
      .createTodo(newTodo)
      .then(returnedTodo => setTodos([...todos, returnedTodo]))
  }

  const toggleComplete = (id) => {
    const todoToUpdate = todos.find(todo => todo.id === id)
    const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed }
  
    todoService
      .updateTodo(id, updatedTodo)
      .then((returnedTodo) => {
        setTodos(todos.map((todo) =>
          todo.id === id ? returnedTodo : todo
        ))
      })
      .catch((error) => {
        console.error('Failed to update the todo:', error)
      })
  }

  const todoDeletion = (id) => {
    todos.find(todo => todo.id === id)
    todoService
     .deleteTodo(id)
     .then(() => {
        setTodos(todos.filter((todo) => todo.id!== id))
      })
    
    setTodos(todos.filter((todo) => todo.id!== id))
  }

  return (
    <div className='mx-auto max-w-4xl sm:max-w-full'>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={todoDeletion} />
    </div>
  )
}

export default App
