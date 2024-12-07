import bg from '../assets/bg.jpg';
import logo from '../assets/fav.jpg'

const Footer = ({isDarkMode}) => {
    return (
        <div style={{backgroundImage: `${isDarkMode ? "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))" : "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0))"}, url(${bg})`, backgroundSize: 'cover'}} className="bg-black ">
       <footer className="footer w-11/12 mx-auto text-white p-10 pt-28">
  <aside>
   <img className='w-28 rounded-full' src={logo} alt="" />
    <p className='text-2xl '>
    Chill Gamer: A Game Review Application
      
      
    </p>
    <p className='text-xl text-gray-300'>Providing game information since 2021</p>
  </aside>
  <nav>
    <h6 className="font-bold  text-white lg:text-3xl">Services</h6>
    <a className="link link-hover text-gray-300 text-lg">Branding</a>
    <a className="link link-hover text-gray-300 text-lg">Information</a>
    <a className="link link-hover text-gray-300 text-lg">All Review</a>
    <a className="link link-hover text-gray-300 text-lg">Game Details</a>
  </nav>
  <nav>
  <h6 className="font-bold  text-white lg:text-3xl">Company</h6>
    <a className="link link-hover text-gray-300 text-lg">Free Fire</a>
    <a className="link link-hover text-gray-300 text-lg">PUBG</a>
    <a className="link link-hover text-gray-300 text-lg">Call Of Duty</a>
    <a className="link link-hover text-gray-300 text-lg">
    Subway Surfers</a>
  </nav>
  <nav>
  <h6 className="font-bold  text-white lg:text-3xl">LEGAL</h6>
    <a className="link link-hover text-gray-300 text-lg">Terms of use</a>
    <a className="link link-hover text-gray-300 text-lg">Privacy policy</a>
    <a className="link link-hover text-gray-300 text-lg">Cookie policy</a>
  </nav>
 
</footer>
<p className="border-t-2 w-11/12 mx-auto border-gray-600 pb-6"></p>
<p className='text-center text-white/70 '>Copyright © {new Date().getFullYear()} - All right reserved by Chill Game</p>
<p className="text-center pb-10 mt-1 text-white/70">Abu Saleh Noor</p>
        </div>
    );
};

export default Footer;