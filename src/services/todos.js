import axios from 'axios';

const baseUrl = 'http://localhost:3000/todos'

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