import React from 'react'
import FeedRouter from './FeedRouter'

const HomeRouter = ({ posts }) => {
    return (
        <main>
            {
                posts.length ? (
                    <FeedRouter posts={posts} />
                ) : (
                    <p>
                        No Post to dispaly
                    </p>
                )
            }
        </main>
    )
}

export default HomeRouter