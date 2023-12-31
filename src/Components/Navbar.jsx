import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between py-3 flex-col md:flex-row gap-5 bg-green-600">
        <div className="flex text-yellow-500 font-italic text-center justify-center">
         <h1 className="tracking-[.10em] text-4xl">The Organic Planters</h1>
         </div>
         <div  className="flex justify-between gap-5 px-5 items-center flex-col sm:flex-row">
         <button className='text-sm border-2 border-yellow-500 w-20 h-10 text-yellow-500 rounded-md'> <Link to="/login">Login</Link></button>
         </div>
    </div>
  )
}

export default Navbar



