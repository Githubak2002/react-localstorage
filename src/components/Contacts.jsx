import {useState,useEffect} from "react";
import { GoTrash } from 'react-icons/go';
import { motion } from "framer-motion";
// import { GrTrash } from 'react-icons/gr';

export default function Contacts() {

  const getContactDetails = () =>{
    let x = localStorage.getItem('lsContacts');
    if(x){
        return JSON.parse(localStorage.getItem('lsContacts'))
    }
    else
        return [];
  }

  const [arr,setArr] = useState(getContactDetails());
   
  const [state,setState] = useState({
    name:"",
    email:"",
    contactNo: undefined,
  })

  // SETdata to locol storage
  useEffect(() => {
    localStorage.setItem('lsContacts', JSON.stringify(arr));    
  }, [arr]);

  const handelchange = (e) =>{
    // console.log(e.target);

    // const name = e.target.name;
    const {name,value} = e.target;
    setState((pre) => {return{
      ...pre,[name]:value}}
      )
  }

  const handlesubmit =(e)=>{
    e.preventDefault();
    // console.log(state);
      setArr([...arr,state])
  }

    const removefun = (i) => {
      let x = [];
      x = arr;
      x.splice(i,1);
      setArr([...x])
    }

   

  // console.log(state.name);
  return (
    <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,duration:1}} className=" max-w-[1200px] mx-auto">

    <h1 className='text-4xl sm:text-6xl pl-6 sm:pl-40 py-6 contactgradient text-white  font-black'>CONTACTS</h1>

      <form className=" flex flex-col gap-4 max-w-[320px] mx-auto sm:p-6 p-3" onSubmit={handlesubmit}>

        <h2 className="font-black text-[#199cff]"> Add new CONTACT</h2>

        <input name="name" type="text" onChange={handelchange} placeholder="Name" required className="border border-black p-2"/>

        <input name="email" type="email" onChange={handelchange} placeholder="Email" required className="border border-black p-2"/>

        <input name="contactNo" type="number" required onChange={handelchange}  placeholder="Contact No" className="border border-black p-2"/> 

        <motion.button whileHover={{scale:1.05,boxShadow:"0px 0px 4px black",color:"black",fontWeight:900}} className="rounded-lg text-slate-600 p-2 " type="submmit"  >Add contact</motion.button>
      </form>

      <div className="flexCenter">
      <div style={{minHeight:"200px"}} className="mt-4 border-t-2 border-black flex px-3 sm:py-6 py-4  flex-wrap w-[95%] mb-6 ">
        
        <div className="sm:flex hidden w-full text-[#12a4ffe2] font-bold text-xl mb-3">
          <h3 className="w-[28%]">Name</h3>
          <h3 className="w-[43%]">Email</h3>
          <h3 className="w-[20%]">Contact No</h3>
          <h3 className="">Delete </h3>

        </div>
        
        {
          arr.map((val,i)=> {
            return(
              <>

              {/* screen size > sm */}
              <motion.div initial={{x:"-100vw",opacity:0}} animate={{x:0,opacity:1}} 
              transition={{delay:0.3  }} 
              key={i} className={`sm:flex  hidden w-full py-3 ${i+1 ===arr.length ? "border-0" : "border-b-2" } `}> 
               <h3 className="w-[30%]">{val.name}</h3>
               <h3 className="w-[46%]">{val.email}</h3>
               <h3 className="w-[20%]">{val.contactNo}</h3>
               <GoTrash onClick={()=> removefun(i)} className=" text-red-500 w-[10%] text-lg flex items-center justify-center hover:cursor-pointer"/>
              </motion.div>

              {/* screen size < sm */}
              <motion.div initial={{x:"-100vw",opacity:0}} animate={{x:0,opacity:1}} 
              transition={{delay:0.3  }} className={`flex sm:hidden items-center w-full ${i+1 ===arr.length ? "border-0" : "border-b-2 pb-2 mb-4 " } border-slate-400 `}>
              <div key={i} className="flex-col w-[90%]"> 
               <b className="uppercase">{val.name}</b>
               <h3 className="">{val.email}</h3>
               <h3 className="">{val.contactNo}</h3>
              </div>
              <GoTrash onClick={()=> removefun(i)} className="text-red-500 w-[10%] text-lg flex items-center justify-center hover:cursor-pointer "/>

               {/* <button onClick={()=> removefun(i)} className="mt-2 text-red-500">Delete</button> */}
              </motion.div>



              {/* {(i>=0) ? <h2 className="mb-2 font-black text-xl text-blue-500">Contact {i+1}</h2> : ''} */}
              {/* <h1>ID = {i}</h1> */}

              {/* <h2 className=" uppercase">Name - {val.name}</h2>
              <h4>Email - {val.email}</h4>
              <h4>Contact No - {val.contactNo}</h4> 
              <button onClick={()=> removefun(i)} className="mt-2 text-red-500">Delete</button> */}

              </>
            )})
        }
      </div>
      </div>



    </motion.main>
  );
}
