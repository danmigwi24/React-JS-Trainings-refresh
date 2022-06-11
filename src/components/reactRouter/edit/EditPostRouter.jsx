import React, { useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'

const EditPostRouter = ({
    posts, handleEdit, editPostTitle, setEditPostTitle, editPostBody, setEditPostBody
}) => {
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
                            onClick={(e)=>handleEdit(post.id)}
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