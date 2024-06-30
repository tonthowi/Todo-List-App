import { useState } from 'react';

const Button = ({handleClick, text}) => {

    return (
        <button
            className="transition ease-in-out hover:-translate-y-0.2 hover:scale-105 bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-lg flex-none"
            onClick={handleClick}
            type="submit"
        >
            {text}
        </button>
    )
}

const AddTodo = ({addTodo}) => {
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput('');
    }

    return (
        <div className='mt-8 mb-8'>
        <form className='flex lg:gap-x-4 gap-y-4 lg:flex-row md:flex-col flex-col' onSubmit={handleSubmit}>
            <input
                type="text"
                name="addTodo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-auto border-2 border-gray-200 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition ease-in-out focus:bg-opacity-0 delay-50"
            />
            <Button text={"Add Todo "} />
        </form>
        </div>
    )
}

export default AddTodo;