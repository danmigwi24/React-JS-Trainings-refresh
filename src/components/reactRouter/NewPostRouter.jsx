import React from 'react'

const NewPostRouter = (
  { postTitle,
    postBody,
    setPostTitle,
    setPostBody,
    handleSubmit }
) => {
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