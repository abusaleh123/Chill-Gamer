import { Outlet } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Components/Navbar";


const Base = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Base;