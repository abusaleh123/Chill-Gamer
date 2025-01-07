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
                element: 
                    <ReviewDetails></ReviewDetails>,
       
                loader: ({params}) => fetch(`https://chill-game-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/allReviews',
                element: <AllReviews></AllReviews>,
                loader : () => fetch('https://chill-game-server.vercel.app/reviewss')
            },
            {
                path: '/myReview',
                element: <PrivateRoute>
                    <MyReviews></MyReviews>
                </PrivateRoute>,
                loader: () => fetch('https://chill-game-server.vercel.app/reviewss')
            },
            {
                path: '/updateReview/:id',
                element: <PrivateRoute>
                    <UpdateReview></UpdateReview>
                </PrivateRoute>,
                loader: ({params}) => fetch(`https://chill-game-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/myWatchList',
                element:<PrivateRoute>
                     <MyWatchList></MyWatchList>
                </PrivateRoute>,
                loader : () => fetch('https://chill-game-server.vercel.app/myWatchList')
            },
            
        ]
    }
])

export default router;