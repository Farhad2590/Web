import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {

  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routes/Routes.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Toaster />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
