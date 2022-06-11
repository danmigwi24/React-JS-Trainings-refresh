import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PostPageRouter = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id == id))
  return (
    <article>
      {post &&
        <div className="justify-center flex flex-col">
          <h2>{post.title}</h2>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
          <Link
            to={`/post/edit/${post.id}`}
          >
            <button
              className='w-56 mr-2'
              >
              Edit
            </button>
          </Link>
          <button
            className='w-56 bg-red-600 '
            onClick={() => handleDelete(post.id)}>
            Delete
          </button>
        </div>
      }

      {/* When Post is empty */}
      {!post &&
        <div>
          <h2>Post Not found</h2>
          <p>Please try again or confirm your details are collect</p>
          <p>
            <Link to={'/'}>Visit Home Page</Link>
          </p>
        </div>
      }
    </article>
  )
}

export default PostPageRouter