import { createBrowserRouter } from "react-router-dom";

import Register from "../Pages/Register";
import Base from "../Base";
import Home from "../Home";
import Login from "../Pages/Login";
import AddReviews from "../Pages/AddReviews";
import PrivateRoute from "../Provider/PrivateRoute";
import HighRateCard from "../Components/HighRateCard";
import ReviewDetails from "../Pages/ReviewDetails";
import AllReviews from "../Pages/Allreviews";
import MyReviews from "../Pages/MyReviews";
import UpdateReview from "../Pages/UpdateReview";
import MyWatchList from "../Pages/MyWatchList";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
path: '/',
element: <Home></Home>,
errorElement: <ErrorPage></ErrorPage>
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
            },
            {
                path: '/reviews/:id',
                element: <PrivateRoute>
                    <ReviewDetails></ReviewDetails>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
            },
            {
                path: '/allReviews',
                element: <AllReviews></AllReviews>,
                loader : () => fetch('http://localhost:5000/reviewss')
            },
            {
                path: '/myReview',
                element: <PrivateRoute>
                    <MyReviews></MyReviews>
                </PrivateRoute>,
                loader: () => fetch('http://localhost:5000/reviewss')
            },
            {
                path: '/updateReview/:id',
                element: <PrivateRoute>
                    <UpdateReview></UpdateReview>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/reviewss/${params.id}`)
            },
            {
                path: '/myWatchList',
                element:<PrivateRoute>
                     <MyWatchList></MyWatchList>
                </PrivateRoute>,
                loader : () => fetch('http://localhost:5000/myWatchList')
            }
        ]
    }
])

export default router;