import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../../../api/posts'
import {useNavigate } from 'react-router-dom'
import { format } from 'date-fns';

import { useContext } from 'react'
import DataContext from '../../../context/DataContext'

const EditPostRouter = () => {

    const {posts,setPosts }=useContext(DataContext)

    //Perform Edit
    const [editPostTitle, setEditPostTitle] = useState('')
    const [editPostBody, setEditPostBody] = useState('')

  /**
   * Returns an imperative method for changing the location.
   *  Used by s, but may also be used by other elements to change the location.
   */
   const navigate = useNavigate()

   const { id } = useParams();
   const post = posts.find(post => ((post.id).toString() === id))
    useEffect(() => {
        try {
            if (post) {
                setEditPostTitle(post.title)
                setEditPostBody(post.body)
            } else {

            }
        } catch (error) {

        }
    }, [post, setEditPostBody, setEditPostTitle])


    

  const handleEdit = async (id) => {
    try {
      const datetime = format(new Date(), 'MMMM dd, yyyy pp')
      const updatedPost = { id, title: editPostTitle, datetime, body: editPostBody }
      //Performing API request to update data 
      const response = await api.put(`/posts/${id}`, updatedPost)
      const updatedPostsList = posts.map(post => (post.id === id ? { ...response.data } : post))
      setPosts(updatedPostsList)
      setEditPostTitle('')
      setEditPostBody('')
      navigate('/')

    } catch (error) {

    }

  }

    return (
        <main className='justify-items-center'>
            {editPostTitle &&
                <div>
                    <h2>Edit Post</h2>
                    <form className='flex flex-col' onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title</label>
                        <input
                            className='border-2 w-80 p-4 border-black rounded-md'
                            id='postTitle'
                            type="text"
                            required
                            placeholder='Title'
                            value={editPostTitle}
                            onChange={(e) => setEditPostTitle(e.target.value)}
                        />
                        <label htmlFor="postTitle">Body</label>
                        <textarea
                            className='border-2 w-80 p-8 border-black rounded-md'
                            id='postTitle'
                            required
                            placeholder='Body'
                            value={editPostBody}
                            onChange={(e) => setEditPostBody(e.target.value)}
                        />
                        <button
                            className='bg-blue-800 text-white w-60 mt-5'
                            type="submit"
                            onClick={(e) => handleEdit(post.id)}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            }
            {
                !editPostTitle &&
                <div>
                    <h2>Post Not found</h2>
                    <p>Well ,Please try again</p>
                    <p>
                        <Link to={'/'}>Visit Our HomePage</Link>
                    </p>
                </div>
            }
        </main>
    )
}

export default EditPostRouter