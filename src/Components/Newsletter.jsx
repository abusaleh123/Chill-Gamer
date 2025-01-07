import { Bounce, toast, ToastContainer } from "react-toastify";

const Newsletter = () => {


    const handlePrevent = e=> {
        e.preventDefault();
        const form = e.target;
        const email = e.target.email.value.trim()
        if(email){
            toast.success('Thank you for subscribing to our newsletter')
        }
        else{
            toast.error('Enter Your Email First')
        }
     
        form.reset('')
    }



   


    return (
        <div className="flex flex-col text-center items-center lg:py-20 py-10 md:py-12  bg-black">
     <div>
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold mb-2">Subscribe to our Newsletter</h1>
        <p className="text-lg  w-3/4 text-center mx-auto mb-10">Subscribe to our email newsletter to get the latest posts delivered right to your email.</p>
     </div>
     <div className="flex border hover:border-white   shadow-xl rounded-xl   p-1">
        <form onSubmit={handlePrevent} action="">
        <label htmlFor="">
       
       <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="input md:w-72 bg-black  border-none focus:outline-none  max-w-xl" />
  
  <button   className="btn btn-ghost w-28 text-white text-lg border hover:border-white border-white ">Subscribe</button>
  
    </label>
  
        </form>
     </div>
        
     <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
        </div>
    );
};

export default Newsletter;

