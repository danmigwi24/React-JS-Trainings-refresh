import React from 'react'
import { Link } from 'react-router-dom'

const PostItemRouter = ({ post }) => {
  return (
    <article className='border-b-2 border-purple-700'>
      <Link to={`/post/${post.id}`}>
        <h2 className='text-lg font-semibold text-blue-700'>{post.title}</h2>
        <p>
          {post.datetime}
        </p>
      </Link>
      <p>
        {(post.body).length <=40 ? post.body : (`${(post.body).slice(0,40)}...`)}
      </p>
      
    </article>
  )
}

export default PostItemRouter