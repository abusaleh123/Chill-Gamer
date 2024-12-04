import { Link, NavLink } from 'react-router-dom';
import bg from '../../src/assets/bg.jpg'
import logo from '../../src/assets/fav.jpg'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

// import Banner from './Banner';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user);
 

    const links = [
       <div className='text-lg flex'>
        <li><NavLink  to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/hello'}>All Reviews</NavLink></li>
        <li><a>Item 3</a></li>
       </div>
    ]
    return (
        <div className='bg-opacity-40 '     style={{
            backgroundImage: `linear-gradient(#00000080, #00000080), url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'to',
            color: 'white', // Ensures text is readable
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
        <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
                links
            }
            </ul>
          </div>
      <Link to={'/'} className='flex items-center'>
        <img className='w-16 rounded-full' src={logo} alt="" />
      <p className="btn btn-ghost text-xl">Chill Game</p>
      </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
            links
           }
          </ul>
        </div>
        <div className="navbar-end gap-4">
         {
          user ? <p>{user.email}</p>:  <Link to={'/register'} className='btn btn-ghost border lg:text-lg border-white'>Register</Link>
         }
          {
            user ? <button onClick={logOut}  className='btn btn-ghost border lg:text-lg border-white'>Log Out</button>  : <Link to={'/login'} className='btn btn-ghost border lg:text-lg border-white'>Login</Link>
          }
        </div>
      </div>

      </div>
    );
};

export default Navbar;