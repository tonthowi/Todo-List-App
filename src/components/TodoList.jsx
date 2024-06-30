import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";

const TodoList = ({todos = [], toggleComplete, deleteTodo}) => {
    if (todos.length === 0) {
        return (
            <div className="text-center text-base text-gray-700 py-6">
                <p className="mx-auto mb-1">😐</p>
                <p>No tasks to show</p>
            </div>
        )
    }
    return (
        <ul className="mx-auto divide-y divide-gray-100">
            <AnimatePresence>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </AnimatePresence>
        </ul>
    )
}

export default TodoList;