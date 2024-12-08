import { useState } from "react";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import HighRated from "./Components/HighRated";
import Navbar from "./Components/Navbar";
import Question from "./Components/Question";
import TopGamers from "./Components/TopGamers";
import { Helmet } from "react-helmet";


const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }
    return (
        <div className={`App ${isDarkMode ? "light" : "dark"}`}>
               <Helmet>
             
                <title>Chill Gamer || Home</title>
               
            </Helmet>
            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode}></Navbar>
            <Banner isDarkMode={isDarkMode}></Banner>
            <HighRated isDarkMode={isDarkMode}></HighRated>
            <Question isDarkMode={isDarkMode} ></Question>
            <TopGamers isDarkMode={isDarkMode}></TopGamers>
            <Footer toggleTheme={toggleTheme} isDarkMode={isDarkMode}></Footer>
        </div>
    );
};

export default Home;