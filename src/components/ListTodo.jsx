import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function ListTodo({ text, list, setList,isCompleted }) {

  function deleteItem(index){
    let newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }

  let dogru = 'text-rose-700 m-4 border border-1 p-4 bg-fuchsia-300 hover:bg-fuchsia-200'
  let yanlis = 'm-4 border border-1 p-4 bg-fuchsia-300 hover:bg-fuchsia-200'
  
  function checkItem(index){
    let newList = [...list]
    if (newList[index].isCompleted){
      newList[index].isCompleted = false
    }else{
      newList[index].isCompleted = true
    }
    setList(newList)
  }
  
  return (
    <div className='pt-6 pb-6'>
      <ul>
        {list.map((item, index) => (
          <li key={index} className={list.isCompleted ? dogru : yanlis}>
            <div className='flex justify-between'>
              <div className='flex gap-4 items-center'>
                <FaCheck onClick={checkItem} />
                {item.text}
              </div>
              <div className='w-8'>
                <FaRegTrashAlt onClick={() => deleteItem(index)}/> 
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default ListTodo