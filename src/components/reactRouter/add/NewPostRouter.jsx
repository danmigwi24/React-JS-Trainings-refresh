import React, { useState } from 'react'
import api from '../../../api/posts';
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns';

import { useContext } from 'react'
import DataContext from '../../../context/DataContext'

const NewPostRouter = () => {

const { posts ,setPosts}=useContext(DataContext)
  //Used When Adding new data
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  /**
     * Returns an imperative method for changing the location.
     *  Used by s, but may also be used by other elements to change the location.
     */
  const navigate = useNavigate()
  //This handles submisson of new peodyct when one is adding  anew product 
  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')

    const newPost = { id, title: postTitle, datetime, body: postBody }
    try {
      //Post data
      const response = await api.post('/posts', newPost)
      const allPost = [...posts, response.data]
      setPosts(allPost)
      setPostTitle('')
      setPostBody('')
      navigate('/')
    } catch (error) {
      console.log(`Error ${error.message}`);
    }

  }
  return (
    <main className='justify-items-center'>
      <h2>New Post</h2>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title</label>
        <input
          className='border-2 w-80 p-4 border-black rounded-md'
          id='postTitle'
          type="text"
          required
          placeholder='Title'
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postTitle">Body</label>
        <textarea
          className='border-2 w-80 p-8 border-black rounded-md'
          id='postTitle'
          required
          placeholder='Body'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button className='bg-blue-800 text-white w-60 mt-5' type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPostRouter