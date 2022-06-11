import React from 'react'

const FooterRouter = () => {
  return (
    <footer 
    className='flex justify-center items-center mt-10 p-4 w-auto bg-blue-300 text-white'>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
      </footer>
  )
}

export default FooterRouter