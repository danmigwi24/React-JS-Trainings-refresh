
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import AboutPageRouter from './AboutPageRouter';
import HomeRouter from './home/HomeRouter';
import LayoutRouter from './layout/LayoutRouter';
import MissingPageRouter from './MissingPageRouter';
import NewPostRouter from './NewPostRouter';
import PostPageRouter from './PostPageRouter';


const AppRouter = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first Post",
      datetime: "2022",
      body: "Dan"
    }, {
      id: 2,
      title: "My Second Post",
      datetime: "2022-08-01",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, beatae."
    }
  ])
  /**
   * Returns an imperative method for changing the location.
   *  Used by s, but may also be used by other elements to change the location.
   */
  const navigate = useNavigate()
  /**
   * Returns a stateful value, and a function to update it.
   * 
   */
  const [search, setSearch] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [searchResults, setSearchResults] = useState([])


  /**
  * This takes effect when post changes or one does a search of the items
  * useEffect(callback, dependencies) is the hook that manages the side-effects in functional components.
  * callback argument is a function to put the side-effect logic
  * Dependencies is a list of dependencies of your side-effect: being props or state values.
  * Some examples of side effects are: fetching-data, directly updating the DOM, and timers.
  *  useEffect accepts two arguments. The second argument is optional.
  */
  useEffect(() => {
    const filterdResults = posts.filter(post => (
      ((post.body).toLowerCase()).includes(search.toLowerCase())
    ))

    setSearchResults(filterdResults.reverse())
  }, [posts, search])


  //This handles submisson of new peodyct when one is adding  anew product 
  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1] + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')

    const newPost = { id, title: postTitle, datetime, body: postBody }
    const allPost = [...posts, newPost]
    setPosts(allPost)
    setPostTitle('')
    setPostBody('')
    navigate('/')

  }
  // This does deletion of product when one deletes an item
  const handleDelete = (id) => {
    console.log(id);
    const postList = posts.filter(post => (post.id !== id))
    setPosts(postList)
    navigate('/')
  }

  return (
    <div className={`flex flex-col justify-center mx-5`}>
      <h1 className="text-blue-800 text-2xl border-b-red-600 border-4 p-5">
        REACT ROUTER DOM
      </h1>

      <Routes>

        <Route
          path="/"
          element={
            <LayoutRouter
              search={search}
              setSearch={setSearch}
            />
          }
        >

          <Route index element={<HomeRouter posts={
            searchResults
          } />} />

          <Route path="post">
            <Route index element={<NewPostRouter
              postTitle={postTitle}
              postBody={postBody}
              setPostTitle={setPostTitle}
              setPostBody={setPostBody}
              handleSubmit={handleSubmit}
            />} />

            <Route path="/post/:id" element={<PostPageRouter posts={posts} handleDelete={handleDelete} />} />

          </Route>

          <Route path="about" element={<AboutPageRouter />} />
          <Route path="*" element={<MissingPageRouter />} />

        </Route>

      </Routes>

    </div >
  );
}

export default AppRouter;
