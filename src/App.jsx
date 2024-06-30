import { useState } from 'react'
import Header from './components/Header.jsx';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id? {...todo, completed:!todo.completed} : todo
  ))}

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id!== id))
  }

  return (
    <div className='mx-auto max-w-4xl sm:max-w-full'>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
