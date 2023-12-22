import React from 'react'

function Input({ input, todo, setTodo, list, setList }) {

    function inputValue(e) {
        setTodo({
            text: e.target.value,
            isCompleted: false
        })
        if(e.key === 'Enter'){
            valueHandle()
        }
    }
    console.log(todo)

    function valueHandle() {
        setList([...list, todo])
        input.current.value = ('')
    }
    

    return (
        <div className=' flex justify-center'>
            <input
                placeholder='What is the task today?'
                className='w-5/6 block w-full p-2 text-gray-900 border-2 border-sky-900  bg-gray-50 sm:text-md  dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400'
                type="text"
                ref={input}
                onKeyUp={inputValue}
            />
            <button
                className='w-auto p-2  text-white font-semibold bg-sky-900 hover:bg-sky-800'
                onClick={valueHandle}
            >+Add</button>
        </div>
    )
}

export default Input