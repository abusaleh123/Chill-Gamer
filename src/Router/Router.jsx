import { createBrowserRouter } from "react-router-dom";

import Register from "../Pages/Register";
import Base from "../Base";
import Home from "../Home";
import Login from "../Pages/Login";
import AddReviews from "../Pages/AddReviews";
import PrivateRoute from "../Provider/PrivateRoute";


const router = createBrowserRouter([
    {
path: '/',
element: <Home></Home>
    },
    {
        path: '/',
        element: <Base></Base>,
        children: [
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addReviews',
                element: <PrivateRoute>
                    <AddReviews></AddReviews>
                </PrivateRoute>
            }
        ]
    }
])

export default router;