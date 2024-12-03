import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: "/hello",
                element: <h2>HEllo</h2>
            }
        ]
    }
])

export default router;