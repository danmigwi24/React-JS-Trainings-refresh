import React from 'react'

const HeaderRouter = ({ title }) => {
    return (
        <header className='flex justify-center items-center p-2 w-auto bg-blue-300 text-white'>
            {title}
        </header>
    )
}

export default HeaderRouter