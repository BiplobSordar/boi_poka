import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routes.jsx'
import { Bounce, ToastContainer } from 'react-toastify'
import UserProvider from './Context/userContext.jsx'
import { BookProvider } from './Context/BookContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <BookProvider>
        <RouterProvider router={Routes} />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick={false}
          pauseOnHover={true}
          draggable={true}
          theme="colored"
          transition={Bounce}
        />
      </BookProvider>
    </UserProvider>




  </StrictMode>,
)
