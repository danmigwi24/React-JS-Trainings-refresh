
import { Link, useParams } from 'react-router-dom'
import api from '../../../api/posts'
import {useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../../../context/DataContext'

const PostPageRouter = () => {
  const { posts,setPosts} = useContext(DataContext)
  const { id } = useParams();
  const post = posts.find(post => (post.id == id))
    /**
   * Returns an imperative method for changing the location.
   *  Used by s, but may also be used by other elements to change the location.
   */
     const navigate = useNavigate()


    // This does deletion of product when one deletes an item
    const handleDelete = async (id) => {
      try {
        const response = await api.delete(`/posts/${id}`)
        console.log(response);
  
        const postList = posts.filter(post => (post.id !== id))
        setPosts(postList)
        navigate('/')
      } catch (error) {
        console.log(`Error ${error.message}`);
      }
  
    }
  
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