
import { useState } from 'react';
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
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, beatae."
    }
  ])

  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  return (
    <div className={`flex flex-col justify-center mx-5`}>
      <h1 className="text-blue-800 text-2xl border-b-red-600 border-4 p-5">
        REACT ROUTER DOM
      </h1>

      <Routes>
        <Route
          path="/"
          element={<LayoutRouter
            search={search}
            setSearch={setSearch}
          />
          }>

          <Route index element={<HomeRouter posts={posts} />} />

          <Route path="post">
            <Route index element={<NewPostRouter />} />
            <Route path="/post/:id" element={<PostPageRouter />} />
          </Route>

          <Route path="about" element={<AboutPageRouter />} />
          <Route path="*" element={<MissingPageRouter />} />
        </Route>
      </Routes>

    </div >
  );
}

export default AppRouter;
