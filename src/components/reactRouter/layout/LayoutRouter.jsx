import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterRouter from '../FooterRouter'
import HeaderRouter from '../HeaderRouter'
import NavRouter from '../NavRouter'

const LayoutRouter = ({ search, setSearch }) => {
    return (
        <div>
            <HeaderRouter title="LEARNING REACT ROUTER DOM" />
            <NavRouter
                search={search}
                setSearch={setSearch}
            />
            <Outlet/>
            <FooterRouter />
        </div>
    )
}

export default LayoutRouter