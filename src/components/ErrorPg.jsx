import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPg = () => {
  return (
    <main className='border-t-2 border-black max-w-[1200px] mx-auto'>

        <div className='sm:px-10 px-5 flexCenter flex-col'>
        <h2 className='font-black text-4xl text-red-500 text-center mb-6 mt-[200px]'>404 Error!</h2>
        <Link to="/" className='text-center text-blue-500 text-4xl font-bold'>Go to home page <i class="ri-external-link-line" /> </Link>
        </div>


    </main>
  )
}

export default ErrorPg