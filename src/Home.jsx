import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import HighRated from "./Components/HighRated";
import Navbar from "./Components/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <HighRated></HighRated>
            <Footer></Footer>
        </div>
    );
};

export default Home;