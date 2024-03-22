import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx';
import User from './Components/User/User.jsx';
import UserDetails from './Components/userDetails/userDetails.jsx';
import Post from './Components/Post/Post.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/About',
        element: <About></About>
      },
      {
        path : '/Contact',
        element:<Contact></Contact>
      },
      {
        path : '/Users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element : <User></User>
      },
      {
        path : '/user/:userId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element : <UserDetails></UserDetails>
      },
      {
        path :'/Post',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element : <Post></Post>
      },
      {
        path : '/post/:postId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element : <PostDetails></PostDetails>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
