import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterRouter from '../FooterRouter'
import HeaderRouter from '../HeaderRouter'
import NavRouter from '../NavRouter'

import { useContext } from 'react'
import DataContext from '../../../context/DataContext'

const LayoutRouter = () => {
 
    const {  search, setSearch } =useContext(DataContext)

    return (
        <div>
            <HeaderRouter
                title="LEARNING REACT ROUTER DOM" />
            <NavRouter
                search={search}
                setSearch={setSearch}
            />
            <div className=' max-h-80'>
            <Outlet />
            </div>
            
            <FooterRouter />
        </div>
    )
}

export default LayoutRouter