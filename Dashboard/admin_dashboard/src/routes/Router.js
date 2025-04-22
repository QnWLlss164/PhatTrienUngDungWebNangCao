import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import Category from '../features/Category/Category';
import User from '../features/User/User';
import Restaurant from '../features/Restaurant/Restaurant';
import Food from '../features/Food/Food';
import Post from '../features/Post/Post';
import Login from '../pages/Login/Login';
import AdminRoute from '../layouts/AdminRoute';
const Router = createBrowserRouter([
    {
        path: "/",
        element: (<AdminRoute><HomePage /></AdminRoute>),
        children: [
            {
                path: "/categories",
                element: <Category />,
            },
            {
                path: "/users",
                element: <User />,
            },
            {
                path: "/restaurants",
                element: <Restaurant />,
            },
            {
                path: "/foods",
                element: <Food />,
            },
            {
                path: "/posts",
                element: <Post />,
            },
        ],

    },
    {
        path: "/login",
        element: <Login />,
    }

]);

export default Router;