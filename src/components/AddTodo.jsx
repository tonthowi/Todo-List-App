import { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

const Button = ({ handleClick, text }) => {
  return (
    <button
      className="transition ease-in-out hover:-translate-y-0.2 hover:scale-105 bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-lg flex-none"
      onClick={handleClick}
      type="submit"
    >
      {text}
    </button>
  );
};

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      setError('Please enter a todo');
      return;
    }
    addTodo(input);
    setInput('');
    setError('');
  };

  return (
    <div className='mt-8 mb-8'>
      <form className='flex lg:gap-x-4 gap-y-4 lg:flex-row md:flex-col flex-col' onSubmit={handleSubmit}>
        <div className="relative flex-auto">
          <input
            type="text"
            name="addTodo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo..."
            className={`border-2 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:border-transparent transition ease-in-out focus:bg-opacity-0 delay-50 ${
              error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-slate-900'
            }`}
          />
          {error && (
            <ExclamationCircleIcon
              className="absolute right-2 top-3 h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          )}
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <Button text={"Add Todo"} />
      </form>
    </div>
  );
};

export default AddTodo;