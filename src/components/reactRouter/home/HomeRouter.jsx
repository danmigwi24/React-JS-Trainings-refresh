import React from 'react'
import FeedRouter from './FeedRouter'

const HomeRouter = ({ posts,fetchError,isLoading }) => {
    return (
        <main>
            {isLoading && <p className='text-blue-900 font-semibold text-4xl text-center'>Loading posts</p>}

            {!isLoading && fetchError && <p className='text-red-800 font-semibold text-4xl text-center'>{fetchError}</p>}

            {!isLoading && !fetchError &&
               ( posts.length) ? (
                <FeedRouter posts={posts} />
            ) : (
                <p className='text-red-600 text-lg animate-bounce '>
                    No Post to dispaly {posts.length}
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