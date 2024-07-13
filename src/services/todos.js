import axios from 'axios';

const baseUrl = 'https://todo-list-app-backend-red.vercel.app/todos'

const getAllTodos = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createTodo = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const updateTodo = (id, updatedObject) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedObject)
    return request.then(response => response.data)
}

const deleteTodo = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(() => null)
}

export default { getAllTodos, createTodo, updateTodo, deleteTodo }