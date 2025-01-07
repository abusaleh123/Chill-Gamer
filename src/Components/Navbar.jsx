import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import bg from "../../src/assets/bg.jpg";
import logo from "../../src/assets/fav.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };






  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 



const combinedStyle = {
       
  background: location.pathname === '/' 
    ? (scrollPosition === 0 ? 'transparent' : `url(${bg})`) : location.pathname === '/addReviews' ? `url(${bg})`:   location.pathname === "/login"
          ? `url(${bg})`
          : location.pathname === "/register"
          ? 
              `url(${bg})`
             
            
          :location.pathname.startsWith('/reviews/') && location.pathname.split('/')[4] === user._id
          ? `url(${bg})` : location.pathname === '/allReviews' ?  `url(${bg})` : location.pathname === '/myReview' ? `url(${bg})` : location.pathname.startsWith('/updateReview/') && location.pathname.split('/')[4] === user._id
            ?`url(${bg})` : location.pathname === "/myWatchList" ? `url(${bg})` : 'undefined'
   ,
  position: location.pathname === '/' ? ( scrollPosition === 0 ? 'absolute' : 'sticky') :location.pathname === '/addReviews' ? 'sticky' : location.pathname === "/login"
  ? `sticky`
  : location.pathname === "/register"
  ? 
      `sticky`
     
    
  :location.pathname.startsWith('/reviews/') && location.pathname.split('/')[4] === user._id
  ? 'sticky' : location.pathname === '/allReviews' ?  'sticky': location.pathname === '/myReview' ?  'sticky' : location.pathname.startsWith('/updateReview/') && location.pathname.split('/')[4] === user._id
    ?'sticky' : location.pathname === "/myWatchList" ?  'sticky' : 'undefined',
  top: 0,

  zIndex: 50,
  transition: 'background-color 0.3s ease',

  
};

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
   
    <div style={combinedStyle} className="navbar w-full  mx-auto">
      <div  className={`navbar  sticky top-0 z-50 lg:w-11/12 mx-auto`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" onClick={toggleDropdown} className="btn btn-ghost xl:hidden">
          {dropdownOpen ? (
          <IoCloseOutline className={`text-xl `} />
        ) : (
          <CiMenuBurger className={`text-xl `}  />
        )}
          </div>
         {
          dropdownOpen && (
            <ul tabIndex={0} className="menu menu-sm dropdown-content flex flex-col bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink className="text-xl nav" to="/">Home</NavLink></li>
            <li><NavLink className="text-xl nav" to="/allReviews">All Reviews</NavLink></li>
            {user && <li><NavLink className="text-xl nav" to="/addReviews">Add Reviews</NavLink></li>}
            {user && <li><NavLink className="text-xl nav" to="/myReview">My Reviews</NavLink></li>}
            {user && <li><NavLink className="text-xl nav" to="/myWatchList">My WatchList</NavLink></li>}
            <div className="mt-2">
              <label className="flex cursor-pointer gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                <input onClick={toggleTheme} type="checkbox" className={`toggle theme-controller ${isDarkMode ? "bg-purple-500" : "bg-white"}`} />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
              </label>
            </div>
          </ul>
          )
         }
        </div>
        <Link to="/" className="flex gap-0 items-center">
          <img className="lg:w-16 w-10 rounded-full" src={logo} alt="Logo" />
          <p className="btn btn-ghost text-md hidden lg:flex lg:text-4xl">Chill Gamer</p>
        </Link>
      </div>
      <div className="navbar-center hidden xl:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          <div className="flex gap-5 items-center justify-center">
            <NavLink className="text-xl nav" to="/">Home</NavLink>
            <NavLink className="text-xl nav" to="/allReviews">All Reviews</NavLink>
            {user && <NavLink className="text-xl nav" to="/addReviews">Add Reviews</NavLink>}
            {user && <NavLink className="text-xl nav" to="/myReview">My Reviews</NavLink>}
            {user && <NavLink className="text-xl nav" to="/myWatchList">My WatchList</NavLink>}
          </div>
        </ul>
      </div>
      <div className="navbar-end md:gap-4 gap-1">
        {user ? (
          <>
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
              <img className="md:w-10 md:h-10 w-8 h-8 object-cover rounded-full cursor-pointer" src={user.photoURL} alt="Profile" />
            </div>
            <Link to="/" onClick={handleSignOut} className="btn btn-ghost border lg:text-lg border-white">Log Out</Link>
          </>
        ) : (
          <Link to="/register" className="btn btn-ghost border lg:text-lg border-white">Register</Link>
        )}
        {!user && <Link to="/login" className="btn btn-ghost border lg:text-lg border-white">Login</Link>}
        <div className="hidden md:block">
          <label className="flex cursor-pointer gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="hidden md:block" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <input onClick={toggleTheme} type="checkbox" className={`toggle theme-controller hidden md:block ${isDarkMode ? "bg-purple-500" : "bg-white"}`} />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="hidden md:block" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          </label>
        </div>
      </div>
      </div>
    </div>
  
  );
};

export default Navbar;
