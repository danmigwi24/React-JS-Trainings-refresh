import React from 'react'
import PostItemRouter from './PostItemRouter'

const FeedRouter = ({posts}) => {
  return (
    <div className=''>
        {
            posts.map(post=>(
                <PostItemRouter key={post.id} post={post}/> 
            ))
        }
    </div>
  )
}

export default FeedRouter