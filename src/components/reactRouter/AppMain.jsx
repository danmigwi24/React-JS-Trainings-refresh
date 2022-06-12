
import { Route, Routes, } from 'react-router-dom'
import AboutPageRouter from './AboutPageRouter';
import HomeRouter from './home/HomeRouter';
import LayoutRouter from './layout/LayoutRouter';
import MissingPageRouter from './MissingPageRouter';
import NewPostRouter from './add/NewPostRouter';
import PostPageRouter from './view/PostPageRouter';
import EditPostRouter from './edit/EditPostRouter';
import { DataProvider } from '../../context/DataContext';


const AppMain = () => {
  return (
    <div className={`flex flex-col justify-center mx-5`}>
      <h1 className="text-blue-800 text-2xl border-b-red-600 border-b-4 rounded-md p-5">
        REACT ROUTER DOM
      </h1>
      <DataProvider>
        <Routes>
          {/* Layout with Outlet for content */}
          <Route
            path="/"
            element={
              <LayoutRouter
              />
            }
          >
            {/* Home Main page */}
            <Route index element={
            <HomeRouter
            />} />
            {/* Post Routes */}
            <Route path="post">
              {/* Add new post */}
              <Route
                index
                element={
                  <NewPostRouter
                  />
                }
              />
              {/* Edit Router */}
              <Route
                path="post/edit/:id"
                element={
                  <EditPostRouter/>
                }
              />
              {/* View Post Details */}
              <Route
                path="post/:id"
                element={
                  <PostPageRouter
                  />
                }
              />

            </Route>
            {/* About Us */}
            <Route path="about" element={<AboutPageRouter />} />
            {/* Missing path */}
            <Route path="*" element={<MissingPageRouter />} />

          </Route>

        </Routes>
      </DataProvider>
    </div >
  );
}

export default AppMain;
