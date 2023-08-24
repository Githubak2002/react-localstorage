import React from 'react'

function GetDate() {
    let d = new Date ();
    let year = d.getFullYear();
    return (
      <main className='mt-7 text-center'>

        <h2>Copyright
            <i className='mx-1 ri-copyright-line' />
            {year}. Created by Anurag Lohar
        </h2> 

            {/* <h2>Copyright </h2>
            <i className='mx-1 ri-copyright-line' />
            <h2>{year}. Created by </h2>
            <b className='font-bold text-xl'>Anurag Lohar</b>.  */}
      </main>
    );
  }


const Footer = () => {
  return (
    <footer className='mt-8 flexCenter md:px-0 px-[20px] text-[15px] py-[18px] flex-col border-t-2 border-black'>

        {/* <hr className='my-2 w-[85%] m-auto'/> */}

        <GetDate />

        {/* <h6 className='pt-[4px] safade'></h6> */}

        {/* <h6 className='pt-[4px] safade'> // API - Hooks - Router - Fundamentals... //</h6> */}
        
        <div className=' text-3xl hover:transition-all hover:duration-[1.4s] hover:scale-110 hover:text-purple-500 flexCenter pt-1'>
        <a href="https://github.com/Githubak2002" target='blank'>
        <i className=" ri-github-line p-2"></i></a>
        <a href="https://github.com/Githubak2002" target='blank'>
        <h2>Github</h2></a>
        </div>
        

    </footer>
  )
}
export default Footer;
