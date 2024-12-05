import Banner from "./Components/Banner";
import HighRated from "./Components/HighRated";
import Navbar from "./Components/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <HighRated></HighRated>
        </div>
    );
};

export default Home;