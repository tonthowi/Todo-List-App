import { useState } from 'react';

const Button = ({handleClick, text}) => {

    return (
        <button
            className="transition ease-in-out hover:-translate-y-0.2 hover:scale-105 bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-lg"
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
        <div className='mx-auto max-w-3xl p-8'>
        <form className='grid grid-cols-3 gap-2' onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add Todo"
                className="col-span-2 border-2 border-gray-200 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition ease-in-out focus:bg-opacity-0 delay-50"
            />
            <Button text={"Add Todo"} />
        </form>
        </div>
    )
}

export default AddTodo;