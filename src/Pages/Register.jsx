import { useContext } from 'react';
import bg from '../../src/assets/regibg.jpg'
import { AuthContext } from '../Provider/AuthProvider';
import auth from '../firebase.init';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import modalImg from '../../src/assets/modal.jpg'

const Register = () => {
    const {registerWithEmailPass} = useContext(AuthContext);
    // console.log(registerWithEmailPass);
   
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);


    

        if(password > 6) {
            toast.error('Password should be at least 6 character')
            return
        }


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if(!passwordRegex.test(password)){
          toast.error('At Least One Uppercase, One Lowercase')
          return
        }

       registerWithEmailPass(email, password, auth) 
       .then(result => {
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "You Are Successfully Registered",
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

        console.log(result.user);
       })
       .catch(error => {
        console.log(error.message);
       })
    }
    return (
        <div style={{  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,  backgroundPosition: 'center',
        backgroundSize: 'cover',}} className='pt-10'>
            <div className='min-h-screen '>
            <div className="border w-8/12 mx-auto lg:min-h-screen  flex flex-col justify-center rounded-xl  backdrop-blur-md  bg-transparent ">
  <div className="hero-content flex-col  ">
    <div>
        
    </div>
    <div className="card bg-blend-hard-light border w-full max-w-sm shrink-0  shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body  backdrop-blur-sm bg-white/20 flex justify-center">
      <div>
        <h1 className='text-4xl font-bold text-white'>Register Now</h1>
      </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" placeholder="Your Name" name='name' className="input placeholder-slate-100 text-white bg-white/10 input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name='email' placeholder="Your Email" className="input placeholder-slate-100 text-white bg-white/20 input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URl" name='photo' className="input placeholder-slate-100 text-white bg-white/20 input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-md">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input placeholder-slate-100 text-white bg-white/20 input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-ghost border bg-[#2E0039] border-white hover:border-white text-white font-bold text-lg">Register</button>
        </div>
       <p className='mt-2'>Already Have An Account? please <span className='font-bold text-[#a235bd]'><Link to={'/login'}>Login</Link></span></p>
      </form>
    </div>
  </div>
</div>
            </div>
            <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
        </div>
    );
};

export default Register;