import { createBrowserRouter } from "react-router-dom";

import Register from "../Pages/Register";
import Base from "../Base";
import Home from "../Home";
import Login from "../Pages/Login";


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
            }
        ]
    }
])

export default router;