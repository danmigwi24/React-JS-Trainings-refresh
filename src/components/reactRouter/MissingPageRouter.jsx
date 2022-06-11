import React from 'react'
import { Link } from 'react-router-dom'

const MissingPageRouter = () => {
  return (
    <main className='items-center justify-center flex flex-col'>
      <h2 className='p-1 text-3xl text-red-600 italic animate-pulse'>Page Missng</h2>
      <p className='m-2'>Try again later </p>
      <p className='mt-3'>
        <Link className='border-4 rounded-md border-red-600 w-72 p-2 hover:border-blue-800 text-white bg-blue-300' to={'/'}>Visit Home</Link>
      </p>
    </main>
  )
}

export default MissingPageRouter