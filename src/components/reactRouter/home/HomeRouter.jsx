import React from 'react'
import FeedRouter from './FeedRouter'
import { useContext } from 'react'
import DataContext from '../../../context/DataContext'

const HomeRouter = () => {
   const{searchResults,fetchError,isLoading }= useContext(DataContext)
    return (
        <main>
            {isLoading && <p className='text-blue-900 font-semibold text-4xl text-center'>Loading posts</p>}

            {!isLoading && fetchError && <p className='text-red-800 font-semibold text-4xl text-center'>{fetchError}</p>}

            {!isLoading && !fetchError &&
               ( searchResults.length) ? (
                <FeedRouter posts={searchResults} />
            ) : (
                <p className='text-red-600 text-lg animate-bounce '>
                    No Post to dispaly {searchResults.length}
                </p>
            )
            }
        </main>
    )
}

/*
 {
                posts.length ? (
                    <FeedRouter posts={posts} />
                ) : (
                    <p className='text-red-600 text-lg animate-bounce'>
                        No Post to dispaly
                    </p>
                )
            }
*/
export default HomeRouter