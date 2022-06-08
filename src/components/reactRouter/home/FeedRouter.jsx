import React from 'react'
import PostRouterPage from './PostRouterPage'

const FeedRouter = ({posts}) => {
  return (
    <div>
        {
            posts.map(post=>(
                <PostRouterPage key={post.id} post={post}/>
            ))
        }
    </div>
  )
}

export default FeedRouter