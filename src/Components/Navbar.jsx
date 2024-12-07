import { Link, NavLink, useLocation } from "react-router-dom";
import bg from "../../src/assets/bg.jpg";
import logo from "../../src/assets/fav.jpg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

// import Banner from './Banner';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  console.log(user);

  const navStyle =
    location.pathname === "/addReviews"
      ? {
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : location.pathname === "/login"
      ? {
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : location.pathname === "/register"
      ? {
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      :location.pathname.startsWith('/reviews/') && location.pathname.split('/')[4] === user._id
      ? {
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : location.pathname === '/allReviews' ?  {
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : location.pathname === '/myReview' ?  {
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : location.pathname.startsWith('/updateReview/') && location.pathname.split('/')[4] === user._id
        ? {
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } : location.pathname === "/myWatchList" ?  {
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
      : "absolute top-0  z-10 bg-opacity-40 ";


      const handleHidden = location.pathname === '/' ? 'block' : 'hidden';

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = [
    <div className="text-lg flex ">
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/hello"}>All Reviews</NavLink>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </div>,
  ];
  return (
    <div
      className=""
      style={{
        backgroundImage: `linear-gradient(#00000080, #00000080), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "to",
        color: "white", // Ensures text is readable
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={`navbar w-11/12 mx-auto  ${navStyle}  `}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="flex items-center">
            <img className="w-16 rounded-full" src={logo} alt="" />
            <p className="btn btn-ghost text-4xl">Chill Game</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
        <div className="flex gap-5 items-center justify-center">
 
            <NavLink className={"text-xl nav"} to={"/"}>
              Home
            </NavLink>
            <NavLink className={"text-xl nav"} to={"/allReviews"}>
              All Reviews
            </NavLink>
            {user && (
              <NavLink className={"text-xl nav"} to={"/addReviews"}>
                Add Reviews
              </NavLink>
            )}
            {
              user && <NavLink className={"text-xl nav"} to={"/myReview"}>
              My Reviews
            </NavLink>
            }
            {
              user && <NavLink className={"text-xl nav"} to={"/myWatchList"}>
              My WatchList
            </NavLink>
            }
            </div>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {user ? (
            <>
              <div
                className="tooltip tooltip-left "
                data-tip={user?.displayName}
              >
                <img
                  className="w-10 h-10 rounded-full cursor-pointer"
                  src={user.photoURL}
                  alt="User"
                />
              </div>
            </>
          ) : (
            <Link
              to={"/register"}
              className="btn btn-ghost border lg:text-lg border-white"
            >
              Register
            </Link>
          )}
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-ghost border lg:text-lg border-white"
            >
              Log Out
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-ghost border lg:text-lg border-white"
            >
              Login
            </Link>
          )}
          {/* <button className="text-xl nav" onClick={toggleTheme}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button> */}
{/*  */}
            <div className={`${handleHidden}`}>
            <label className="flex cursor-pointer gap-2">
     


  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
  <input  onClick={toggleTheme} type="checkbox" value="synthwave" className={`toggle theme-controller  ${isDarkMode ? "bg-purple-500" : "bg-white"}   `} />
  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>

</label>
            </div>
            {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
