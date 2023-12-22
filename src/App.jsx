import './App.css'
import { useEffect, useRef, useState } from "react";
import Input from './components/Input';
import ListTodo from './components/ListTodo';

function App() {
  const input = useRef()
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('list'))
    if(!todos){
      localStorage.setItem('list',JSON.stringify([]))
    }else{
      setList(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])



  return (
    <div className='w-4/5 h-auto bg-blue-200/50 rounded-lg my-16 m-auto pt-4 pb-16'>
      <div className='w-1/2 mx-auto'>
        <h1 className='text-center m-10 text-5xl text-white  font-semibold'>TODO APP</h1>

        <Input 
          input={input} 
          todo={todo}
          setTodo={setTodo}
          list={list}
          setList={setList}
        />

        <ListTodo
          list={list}
          setList={setList}
        />

      </div>
    </div>
  );
}

export default App;
