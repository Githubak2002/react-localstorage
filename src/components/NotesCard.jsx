import React from 'react'
import { GoTrash } from 'react-icons/go';


const NotesCard = ({id,title,content,onDataReceived}) => {

    const sendDataToParent = (id) => {
        onDataReceived(id);
      };

  return (
    <main className='relative flex flex-col m-4 p-2  border-2 border-[#ffc402c5] min-h-[180px] max-h-[320px] max-w-[360px] min-w-[250px] mx-auto '>

        <h3 className='w-full pl-4 text-xl border-b-2 border-[#ffc402c5] py-2 focus:outline-none'>
            {title}
        </h3>

        <h4 rows="10" type="text" placeholder='Take note here...' className='w-full overflow-auto mt-2 px-4 py-2 active:border-0 focus:outline-none mb-[28px]'>
            {content}
        </h4>
        

        <GoTrash 
        className='absolute bottom-[4px] right-[4px] text-[#f00] p-1 text-4xl hover:cursor-pointer' 
        onClick={() => sendDataToParent(id)}
        
        // className="text-red-500 w-[10%] text-lg flex items-center justify-center hover:cursor-pointer "
        // onClick={() => sendDataToParent(id)}
        
        />

    </main>
  )
}

export default NotesCard