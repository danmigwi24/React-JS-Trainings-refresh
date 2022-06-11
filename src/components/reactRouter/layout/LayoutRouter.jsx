import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterRouter from '../FooterRouter'
import HeaderRouter from '../HeaderRouter'
import NavRouter from '../NavRouter'

const LayoutRouter = ({ width, search, setSearch }) => {
    return (
        <div>
            <HeaderRouter
                title="LEARNING REACT ROUTER DOM"
                width={width} />
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