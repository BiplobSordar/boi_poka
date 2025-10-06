import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFound'
import ErrorPage from './pages/Error'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import ServicesPage from './pages/Service'
import ListedBooksPage from './pages/ListedBook'
import AuthLayout from './pages/AuthLayout'
import LoginPage from './pages/Login'
import SignUpPage from './pages/Signup'
import BookDetailsPage from './pages/BookDetailsPage'


export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '*', element: <NotFoundPage /> },
            { path: '/error', element: <ErrorPage /> },
            { path: '/about', element: <AboutPage /> },
            { path: '/contact', element: <ContactPage /> },
            { path: '/service', element: <ServicesPage /> },
            { path: '/listed-books', element: <ListedBooksPage /> },
            { path: '/book/:id', element: <BookDetailsPage/> },
            {
                path: '/auth', element: <AuthLayout />,
                children: [

                    { index: true, element: <LoginPage /> },
                    { path: '/auth', element: <LoginPage /> },
                    { path: '/auth/login', element: <LoginPage /> },
                    { path: '/auth/sign-up', element: <SignUpPage /> }
                ]
            },

        ]
    }
])