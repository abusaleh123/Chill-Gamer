import { Link, useNavigate } from 'react-router-dom';
import bg from '../../src/assets/login.png'
import google from '../../src/assets/google.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import auth from '../firebase.init';
import modalImg from '../../src/assets/modal.jpg'
// import auth from '../firebase.init';

const Login = () => {
    const {loginWithEmailPass, googleSgnIn, provider, setUser, user} = useContext(AuthContext);
    const navigate = useNavigate()
    console.log(user);

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log( email,  password);

            loginWithEmailPass( email, password)
            .then(result => {
              Swal.fire({
                icon: "success",
                title: "Login Successful!",
                text: "You Are Successfully Logged In",
                background: `url(${modalImg}) no-repeat center top`, 
                backgroundSize: 'cover', 
                confirmButtonText: 'Close',
                showCancelButton: false,
                customClass: {
                  confirmButton: 'custom-confirm-button',
                
                  popup: 'custom-popup', 
                  title: 'custom-title', 
                  icon: 'custom-icon' ,
                  
                },
                buttonsStyling: true
              });
              // console.log(result);
      
              setUser(result);
              navigate('/')
            })
            .catch(error => {

              Swal.fire({
                icon: "error",
                title: "Login Failed!",
                text: "Please try again later",
                background: `url(${bg}) no-repeat center center `, 
                backgroundSize: 'cover', 
                confirmButtonText: 'Ok',
             
                showCancelButton: false,
                customClass: {
                  confirmButton: 'custom-confirm-button',
                
                  popup: 'custom-popup', 
                  title: 'custom-title', 
                  icon: 'custom-icon' ,
                  
                },
                buttonsStyling: true
              });
                // console.log(error.message);
            })


    }


 const handleGoogleLogin = () => {
  googleSgnIn(auth, provider)
  .then(result => {
    // console.log(result.user);
    setUser(result)
    navigate('/')
    // console.log(user);
  })
  .catch(error => {
    // console.log(error.message);
  })
 }







    return (
        <div style={{  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,  backgroundPosition: 'center',
        backgroundSize: 'cover',}} className='pt-10 lg:pb-28'>
            <div className='lg:min-h-screen pb-10 lg:pb-0'>
            <div className="border md:w-8/12 mx-auto lg:min-h-screen  flex flex-col justify-center rounded-xl  backdrop-blur-md  bg-transparent ">
  <div className="hero-content flex-col  ">
    <div>
        
    </div>
    <div className="card bg-blend-hard-light border w-full max-w-sm shrink-0  shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body  backdrop-blur-sm bg-white/20 flex justify-center">
      <div>
        <h1 className='text-4xl font-bold text-white'>Welcome Back!</h1>
        <p className='mt-2'>Enter your details below to sign in into your account</p>
      </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name='email' placeholder="Your Email" className="input placeholder-slate-100 text-white bg-white/20 input-bordered" required />
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-md">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input placeholder-slate-100 text-white bg-white/20 input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-ghost border bg-[#2E0039] border-white hover:border-white text-white font-bold text-lg">Login</button>
        </div>
       <p className='mt-2'>Already Have An Account? please <span className='font-bold text-[#a235bd]'><Link className='text-lg' to={'/register'}>Register</Link></span></p>
     
      </form>
      
    </div>
       <div className="divider w-1/4 mx-auto">OR</div>
    <button onClick={handleGoogleLogin} className='border py-1 rounded-full flex items-center justify-center gap-4 lg:w-4/12 px-4'>
        <img className='w-10' src={google} alt="" />
        <h1 className='md:text-lg text-white/70 '>Login With Google</h1>
      </button>
  </div>
</div>
            </div>
        </div>
    );
};

export default Login;