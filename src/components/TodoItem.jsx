import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Button = ({handleClick, text}) => {

    return (
        <button
            className="transition ease-in-out hover:-translate-y-0.2 hover:scale-105 rounded-md bg-white px-4 py-0.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={handleClick}
            type="button"
        >
            {text}
        </button>
    )
}

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="relative flex justify-between gap-x-6 px-4 py-3 hover:bg-gray-50 sm:px-6">
      <div className="relative flex items-start py-4 transition ease-in-out hover:-translate-y-0.2 hover:scale-105">

        <div className="ml-3 flex h-6 items-center">
            {/* <input
            className="cursor-pointer"
            id={todo.text}
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            /> */}

            <CheckCircleIcon
                className={`cursor-pointer h-7 w-7 text-grey-200 ${todo.completed ? 'line-through text-green-600' : ''}`}
                id={todo.text}
                type="checkbox"
                checked={todo.completed}
                onClick={() => toggleComplete(todo.id)}
            />
        </div>

        <div className="min-w-0 flex-1 text-base leading-6 px-4">
            <span
            htmlFor={todo.text}
            onClick={() => toggleComplete(todo.id)}
            className={`cursor-pointer font-medium text-gray-900 ${todo.completed ? 'line-through text-green-600' : ''}`}
            >
            {todo.text}
            </span>
        </div>
      </div>
      <Button handleClick={() => deleteTodo(todo.id)} text={"Delete"} />
    </li>
  );
};

export default TodoItem;