import { useState } from "react";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import HighRated from "./Components/HighRated";
import Navbar from "./Components/Navbar";


const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }
    return (
        <div className={`App ${isDarkMode ? "light" : "dark"}`}>
            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode}></Navbar>
            <Banner isDarkMode={isDarkMode}></Banner>
            <HighRated isDarkMode={isDarkMode}></HighRated>
            <Footer toggleTheme={toggleTheme} isDarkMode={isDarkMode}></Footer>
        </div>
    );
};

export default Home;