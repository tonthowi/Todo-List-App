import { CheckCircleIcon, TrashIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion';

const DeleteButton = ({ handleClick }) => {

    return (
        <TrashIcon
        className="transition ease-in-out hover:-translate-y-0.2 hover:scale-105 rounded-md w-8 h-8 bg-white p-2 text-sm font-semibold text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex-none sm:block cursor-pointer"
        onClick={handleClick}
        type="button"    
        />
    )
}

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <motion.li
        className="relative flex items-center justify-between gap-x-2 pl-0 pr-3 hover:bg-gray-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
    >
      <div className="relative flex items-center py-6 transition ease-in-out hover:-translate-y-0.2 hover:scale-105">

        <div className="ml-3 flex h-6">

            <CheckCircleIcon
                className={`cursor-pointer h-7 w-7 ${todo.completed ? 'transition ease-in-out duration-150 text-green-600' : 'text-gray-300'}`}
                id={todo.text}
                type="checkbox"
                checked={todo.completed}
                onClick={() => toggleComplete(todo.id)}
            />
        </div>
        <div className="min-w-0 text-base text-start leading-6 px-2">
            <span
            htmlFor={todo.text}
            onClick={() => toggleComplete(todo.id)}
            className={`cursor-pointer font-medium ${todo.completed ? 'line-through text-green-600' : 'text-gray-900'}`}
            >
            {todo.text}
            </span>
        </div>
      </div>
      <DeleteButton handleClick={() => deleteTodo(todo.id)} />
    </motion.li>
 
  );
};

export default TodoItem;