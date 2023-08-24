// import { split } from 'postcss/lib/list';
import React, { useState, useEffect } from 'react';
import { GoTrash } from 'react-icons/go';
import { motion } from 'framer-motion';

function Todo() {

    const getdetails = () =>{
        let x = localStorage.getItem('localstorage');
        if(x){
            return JSON.parse(localStorage.getItem('localstorage'))
        }
        else
            return [];
    }

    const [todos, setTodos] = useState(getdetails());
    const [newTodo, setNewTodo] = useState('');


  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  // Save data to local storage whenever todos array changes
  useEffect(() => {
    localStorage.setItem('localstorage', JSON.stringify(todos));    
  }, [todos]);

  

  function remfun(i) {
    let x = [];
    x = todos;
    x.splice(i,1);

    setTodos([...x])
    // console.log(x);
  }

  return (
    <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,duration:1}} className='mx-auto max-w-[1200px]'>

    <h1 className='text-4xl sm:text-6xl pl-6 sm:pl-40 py-6 todogradient text-white  font-black'>TO-DO LIST</h1>

      <div className='mt-4 px-3 sm:px-0 mx-auto max-w-[460px]'>

      <div className='flex justify-between items-center'>
      <input
        type="text"
        value={newTodo}
        placeholder='Add a task...'
        onChange={(e) => setNewTodo(e.target.value)}
        className=' border-2 border-slate-300 w-full my-4 p-2 '/>
      <motion.button
className='border-2 border-slate-300 ml-4 py-2 px-4' onClick={addTodo}>Add</motion.button>
      </div>

      <ul className=''>
        {todos.map((todo, index) => (
          <div key={index} className='border-b-2 pb-2 flex justify-between items-center my-2'>
          <h3 className='max-w-[88%] pt-2'>{todo}</h3>
          <GoTrash className="mr-3 text-red-500 text-lg flex items-center justify-center hover:cursor-pointer "
          onClick={()=>remfun(index)}/>
          {/* <button className='border-red-300 border rounded-xl p-2 text-red-500' 
              onClick={()=>remfun(index)}
          >Remove</button> */}
          </div>
        ))}

      </ul>
      </div>


    </motion.main>
  );
}

export default Todo;
