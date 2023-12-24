// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Nav = () => {
//   return (
//     <nav className='mx-auto max-w-[1200px] p-6 flex justify-between items-center text-purple-600 font-black border-b-2 border uppercase'>


//       <a href="https://githubak2002.github.io/akportfolio" target='blank' className='font-black text-2xl sm:text-6xl'>AK</a>
//       <div className='text-lg sm:text-3xl hidden sm:flex gap-8'>
//         <NavLink to="/notes">Notes</NavLink>
//         <NavLink to="/contact">Contacts</NavLink>
//         <NavLink to="/todo">TO-Do</NavLink>
//       </div>
//     </nav>
//   )
// }

// export default Nav









import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'
// import HiOutlineMenuAlt1 from 'react-icons/hi'

const Nav = () => {

  const navLinkSty1es =( { isActive} ) => {
    return{
      color: isActive ? "#8d0bffd2" : "black",
      // textDecoration : isActive ? "underline" : "noon"
    }
  }

  // const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav >


    {/* laptop size screen */}
    <div className=''>
    <section className='hidden md:flex items-center justify-between max-w-[920px] mx-auto px-12 h-[60px] '>

      <div className='' >
        <a href="https://githubak2002.github.io/akportfolio" target='blank'>
            <h1 className='logo font-bold text-4xl '>Ak</h1>
            </a>
      </div>
      
      <div 
      className='hidden md:flex font-bold text-xl items-center'>

        <NavLink to='/' style = {navLinkSty1es} className='px-5'>HOME</NavLink>
        <NavLink to='/notes' style = {navLinkSty1es} className='px-5'>NOTES</NavLink>
        <NavLink to='/contact' style = {navLinkSty1es} className='px-5'>CONTACTS</NavLink>
        <NavLink to='/todo' style = {navLinkSty1es} className='px-5'>TO-DO</NavLink>

      </div>
    
      
    </section>
    </div>

      
      
      
  {/* nav bar for small devices  */}

    <section className='mx-auto px-2 relative md:border-none border-black border-b'>

    <div className='my-3 md:hidden flex ml-3' >
        <a href="https://githubak2002.github.io/akportfolio" target='blank'>
            <h1 className='logo font-bold text-4xl'>Ak</h1>
            </a>
      </div>

    <div className=' '>
        <i className={`absolute top-2 right-4 text-xl md:hidden  hover:cursor-pointer  ${toggle ? "hidden" : "ri-menu-2-line"}`}
        onClick={() => setToggle(prev => !prev)}></i>

        <i className={`absolute top-2 right-4 text-xl  md:hidden hover:cursor-pointer ${toggle ? "ri-close-fill" : "hidden"} `}
        onClick={() => setToggle(prev => !prev)}></i>

        <div className={` ${toggle ? "flex" : "hidden"} gap-5 flex md:hidden flex-col items-center justify-end bg-[#25242bc0] text-white rounded-lg p-4 z-50 absolute right-12 top-2 min-w-[168px] font-bold`}>

        <NavLink to='/' className='navlinkcss' onClick={() => setToggle(prev => !prev)}>HOME</NavLink>
        <NavLink to='/notes' className='navlinkcss' onClick={() => setToggle(prev => !prev)}>NOTES</NavLink>
        <NavLink to='/contact ' className='navlinkcss'onClick={() => setToggle(prev => !prev)}>CONTACTS</NavLink>
        <NavLink to='/todo' className='navlinkcss'onClick={() => setToggle(prev => !prev)}>TO-DO</NavLink>

        </div>
      </div>
      
    </section>


    </nav>

  )
}

export default Nav
