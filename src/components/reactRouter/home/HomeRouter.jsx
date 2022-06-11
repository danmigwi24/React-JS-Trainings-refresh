import React from 'react'
import FeedRouter from './FeedRouter'

const HomeRouter = ({ posts }) => {
    return (
        <main>
            {
                posts.length ? (
                    <FeedRouter posts={posts} />
                ) : (
                    <p className='text-red-600 text-lg animate-bounce'>
                        No Post to dispaly
                    </p>
                )
            }
        </main>
    )
}

export default HomeRouter