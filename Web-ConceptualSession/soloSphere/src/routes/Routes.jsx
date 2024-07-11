import {
  createBrowserRouter,

} from "react-router-dom";
import Main from '../layouts/Main'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";
import AllJobs from "../pages/AllJobs";
import BidRequests from "../pages/BidRequests";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch(`http://localhost:9000/jobs`)
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: '/job/:id',
        element: <PrivateRoute>
          <JobDetails />
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/job/${params.id}`),
      },
      {
        path: '/update/:id',
        element: <PrivateRoute>
          <UpdateJob />
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/job/${params.id}`),
      },
      {
        path: '/add-job',
        element: <PrivateRoute>
          <AddJob />
        </PrivateRoute>,
      },
      {
        path: '/my-posted-jobs',
        element: <PrivateRoute>
          <MyPostedJobs />
        </PrivateRoute>,
      },
      {
        path: '/my-bids',
        element: (
          <PrivateRoute>
            <MyBids />
          </PrivateRoute>
        ),
      },
      {
        path: '/bid-requests',
        element: (
          <PrivateRoute>
            <BidRequests />
          </PrivateRoute>
        ),
      },
      {
        path: '/jobs',
        element: <AllJobs />,
      },
    ]
  },
]);



export default router;