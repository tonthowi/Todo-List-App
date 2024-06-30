import { CheckCircleIcon, TrashIcon } from '@heroicons/react/24/solid'

const DeleteButton = ({ handleClick }) => {

    return (
        <TrashIcon
        className="transition ease-in-out hover:-translate-y-0.2 hover:scale-105 rounded-md w-8 h-8 bg-white p-2 text-sm font-semibold text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block cursor-pointer"
        onClick={handleClick}
        type="button"    
        />
        // <button
        //     className="transition ease-in-out hover:-translate-y-0.2 hover:scale-105 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
        //     onClick={handleClick}
        //     type="button"
        // >
        // </button>
    )
}

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="relative flex items-center justify-between gap-x-6 px-4 py-3 hover:bg-gray-50 sm:px-6">
      <div className="relative flex items-center py-4 transition ease-in-out hover:-translate-y-0.2 hover:scale-105">

        <div className="ml-3 flex h-6">
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
      <DeleteButton handleClick={() => deleteTodo(todo.id)} />
    </li>
 
  );
};

export default TodoItem;