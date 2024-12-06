import { Outlet } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const Base = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Base;