import React from 'react'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'

const HeaderRouter = ({ title, width }) => {
    return (
        <header
            className='flex justify-center items-center mt-2 p-2 w-auto bg-blue-300 text-white'
        >
           <h2 className='pr-2'>{title}</h2> 
            {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}
        </header>
    )
}

export default HeaderRouter