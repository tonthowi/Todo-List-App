import TodoItem from "./TodoItem";

const TodoList = ({todos = [], toggleComplete, deleteTodo}) => {
    if (todos.length === 0) {
        return (
            <div className="text-center text-base text-gray-700 py-6">
                No tasks to show
            </div>
        )
    }
    return (
        <ul className="mx-auto divide-y divide-gray-100">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    )
}

export default TodoList;