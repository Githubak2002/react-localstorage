import React, { useState, useEffect } from 'react'
import NotesCard from './NotesCard';
import { animations, motion } from 'framer-motion';

const Notes = () => {
    
    const getnotedetails = () =>{
        let x = localStorage.getItem('lsnotes');
        if(x){
            return JSON.parse(localStorage.getItem('lsnotes'))
        }
        else
            return [];
    }

    const [notes,setNotes] = useState({
        title:"",
        content:"",
    });
    const [notesarr,setNotesArr] = useState(getnotedetails());

    useEffect(() => {
        localStorage.setItem('lsnotes', JSON.stringify(notesarr));    
      }, [notesarr]);




    // --- id from NotesCard --- 
    const handleChildData = (id) => {
        // console.log(id)
        let x = [];
        x = notesarr;
        x.splice(id,1);
        setNotesArr([...x])
      };

    //   ----------------------



    const handleonchange = (e) =>{
        const {name,value} = e.target
        // let name = e.target.name;
        // let value = e.target.value;
        setNotes((pre) => {
            return{...pre,[name]:value}
        })
    }

    const formSubmit =(e)=>{
        e.preventDefault();
        setNotesArr((prev)=> {
          return(
            [...prev,notes]
        )}
        )
        // setNotes("");
    }


  return (
    <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,duration:1}} className='max-w-[1200px] mx-auto'>

        <h1 className='text-4xl sm:text-6xl pl-6 sm:pl-40 py-6 notesgradient text-white  font-black'>KEEP NOTES</h1>

        <form onSubmit={formSubmit} className='flex flex-col m-3 p-2   border-2 border-[#ffc402c5] h-[316px] max-w-[300px] mx-auto'>

            <input type="text" placeholder='Title' className='w-full pl-4 text-xl border-[#ffc402c5] border-b-2 py-2 focus:outline-none'
            name="title" 
            onChange={handleonchange}
            spellCheck={false} required/>

            <textarea rows="10" type="text" placeholder='Take note here...' className='mt-2 px-4 py-2 active:border-0 focus:outline-none'
            name="content" 
            onChange={handleonchange} spellCheck={false} required/>

            <button type='submit' className=' transition-all hover:scale-110 hover:text-black p-2 text-slate-500 font-black'>Add Note </button>
        </form>


        <div className='p-3 flex flex-wrap'>

            {(notesarr.length > 0) ? 
            <motion.h1 
            initial={{x:'-100vw'}} animate={{x:0}}
            transition={{delay:.6}}
            className='text-[#ffc402f6] w-screen my-4 text-center text-3xl font-bold'
            >Your Notes...</motion.h1>       : 
            "" }

            {
                notesarr.map((val,i) => {
                    return(
                        <NotesCard 
                        // remfun = {remnotefun}
                        key={i}
                        id = {i}
                        title = {val.title}
                        content = {val.content}

                        onDataReceived={handleChildData}
                        />
                    )})
            }
        </div>




    </motion.main>
  )
}

export default Notes