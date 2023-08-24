import React from 'react'
import Footer from './Footer'
import contactpng from '../assets/contact.png'
import notespng from '../assets/notes.png'
import todopng from '../assets/todo.png'
import { motion, spring } from 'framer-motion'
import { Link } from 'react-router-dom'


const imgvarients = {
  hidden: {
    opacity:0,
    scale:0
  },
  view:{
    opacity:1,
    scale:1,
    transition:{
      delay:0.3,
      duration:0.1,
      type:spring
    }
  }
}


const LandingPg = () => {
  return (
    <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,duration:1}} className='mx-auto max-w-[1200px]'>

    <h1 className='text-4xl sm:text-6xl py-6 todogradient text-white  font-black text-center '>All in one</h1>

{/* --- all images --- */}
    <div className='sm:my-10 sm:w-full flex flex-wrap justify-center text-2xl font-black'>

      <Link to="todo" className='hover:scale-110 transition-all sm:w-[25%] sm:max-w-[auto] max-w-[310px] my-2 sm:mx-2 mx-[16%] flex-col flexCenter'>
      <motion.div 
      variants={imgvarients} initial="hidden" animate="view"
      >
        <img className='' src={todopng} alt="" />
        <h1 className='text-center'>To-Do list</h1>
      </motion.div>
      </Link>

      <Link to="contact" className='hover:scale-110 transition-all sm:w-[25%] sm:max-w-[auto] max-w-[310px] sm:ml-[10px] sm:mr-[50px] sm:mx-2 mx-[16%] flex-col flexCenter'>
      <motion.div 
      variants={imgvarients} initial="hidden" animate="view"
      >
        <img className='' src={contactpng} alt="" />
        <h1 className='text-center'>Contact</h1>
      </motion.div>
      </Link>

      <Link to="notes" className=' hover:scale-110 transition-all sm:w-[20%] sm:max-w-[auto] max-w-[310px] my-2 sm:mx-2 mx-[22%] flex-col flexCenter'>
      <motion.div
      variants={imgvarients} initial="hidden" animate="view"
      // initial={{x:"-100vw"}}
      // animate={{x:0}}
      >
        <img className='pt-2 pb-10 opacity-90' src={notespng} alt="" />
        <h1 className='text-center '>Notes</h1>
      </motion.div>
      </Link>

    </div>


    <Footer />
    </motion.main>
  )
}

export default LandingPg