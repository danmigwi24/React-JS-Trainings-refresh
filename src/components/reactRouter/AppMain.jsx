
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import AboutPageRouter from './AboutPageRouter';
import HomeRouter from './home/HomeRouter';
import LayoutRouter from './layout/LayoutRouter';
import MissingPageRouter from './MissingPageRouter';
import NewPostRouter from './add/NewPostRouter';
import PostPageRouter from './view/PostPageRouter';
import api from '../../api/posts';
import EditPostRouter from './edit/EditPostRouter';
import useWindowSize from '../../customhooks/useWindowSize';
import useAxiosFetch from '../../customhooks/useAxiosFetch';
import env from '../../api/env.json'


const AppMain = () => {
  const [posts, setPosts] = useState([])
  /**
   * Returns an imperative method for changing the location.
   *  Used by s, but may also be used by other elements to change the location.
   */
  const navigate = useNavigate()
  /**
   * Returns a stateful value, and a function to update it.
   */
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  //Used When Adding new data
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  //Perform Edit
  const [editPostTitle, setEditPostTitle] = useState('')
  const [editPostBody, setEditPostBody] = useState('')

  //use custom hooks
  const {width} =useWindowSize();

  const {data,fetchError,isLoading} =useAxiosFetch(env.baseUrl);



  /**
  * This takes effect when post changes or one does a search of the items
  * useEffect(callback, dependencies) is the hook that manages the side-effects in functional components.
  * callback argument is a function to put the side-effect logic
  * Dependencies is a list of dependencies of your side-effect: being props or state values.
  * Some examples of side effects are: fetching-data, directly updating the DOM, and timers.
  *  useEffect accepts two arguments. The second argument is optional.
  */


  /**
   * This takes effect on load time 
   */
  useEffect(() => {
    setPosts(data)
  }, [data])
  
   /**
    //This  works the same as @useAxiosFetch
   useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts')
        if (response && response.data) setPosts(response.data)
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.statusText);
          console.log(error.response.headers);
          console.log(error.response.config);
        } else {
          console.log(error.message);
        }
      }
    }

    fetchPosts()
  }, [])
   */
  

  /**
   * This takes effect when post changes or one does a search of the items
   */
  useEffect(() => {
    const filterdResults = posts.filter(post => (
      ((post.body).toLowerCase()).includes(search.toLowerCase())
    ))

    setSearchResults(filterdResults.reverse())
  }, [posts, search])


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
    <div className={`flex flex-col justify-center mx-5`}>
      <h1 className="text-blue-800 text-2xl border-b-red-600 border-b-4 rounded-md p-5">
        REACT ROUTER DOM
      </h1>

      <Routes>

        <Route
          path="/"
          element={
            <LayoutRouter
            width={width}
              search={search}
              setSearch={setSearch}
            />
          }
        >

          <Route index element={<HomeRouter
           posts={
            searchResults
          } 
          fetchError={fetchError}
          isLoading={isLoading}
          />} />

          <Route path="post">
            {/* Add new post */}
            <Route
              index
              element={
                <NewPostRouter
                  postTitle={postTitle}
                  postBody={postBody}
                  setPostTitle={setPostTitle}
                  setPostBody={setPostBody}
                  handleSubmit={handleSubmit}
                />
              }
            />
            {/* Edit Router */}
            <Route
              path="/post/edit/:id"
              element={
                <EditPostRouter
                  posts={posts}
                  editPostTitle={editPostTitle}
                  editPostBody={editPostBody}
                  setEditPostTitle={setEditPostTitle}
                  setEditPostBody={setEditPostBody}
                  handleEdit={handleEdit}
                />
              }
            />

            <Route
              path="/post/:id"
              element={
                <PostPageRouter
                  posts={posts}
                  handleDelete={handleDelete}
                />
              }
            />

          </Route>

          <Route path="about" element={<AboutPageRouter />} />
          <Route path="*" element={<MissingPageRouter />} />

        </Route>

      </Routes>

    </div >
  );
}

export default AppMain;
