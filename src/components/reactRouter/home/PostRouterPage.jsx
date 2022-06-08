import React from 'react'
import { Link } from 'react-router-dom'

const PostRouterPage = ({ post }) => {
  return (
    <article className='post'>
      <Link to={`/post/${post.id}`}>
        <h2 >{post.title}</h2>
        <p>
          {post.datetime}
        </p>
      </Link>
      
    </article>
  )
}

export default PostRouterPage