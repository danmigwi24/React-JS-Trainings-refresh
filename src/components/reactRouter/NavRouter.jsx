import React from 'react'
import { Link } from 'react-router-dom'

const NavRouter = ({ search, setSearch }) => {
    return (
        <nav className=' pt-4 pb-4'>
            <form className='flex' onSubmit={(e) => e.preventDefault()}>
                <label
                    className='pr-5'
                    htmlFor="search">
                    Search Post
                </label>
                <input
                    type="text"
                    id="search"
                    placeholder='Search Posts'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul className='flex bg-gray-300 mt-2'>
                <li>
                    <Link
                        className='p-2 cursor-pointer hover:bg-blue-400 hover:border-2 hover:rounded-md hover:text-white'
                         to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className='p-2 cursor-pointer hover:bg-blue-400 hover:border-2 hover:rounded-md hover:text-white'
                        to="/post">
                        Add Posts
                    </Link>
                </li>
                <li>
                    <Link
                        className='p-2 cursor-pointer hover:bg-blue-400 hover:border-2 hover:rounded-md hover:text-white'
                        to="/about">
                        About Us
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavRouter


