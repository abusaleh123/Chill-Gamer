import { useLoaderData, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import Swal from "sweetalert2";
import modalImg from '../../src/assets/modal.jpg'
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";


const ReviewDetails = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);
    const userEmail = user.email;
    const {id} = useParams();
    // console.log(id);
    const reviewDetails = useLoaderData();
    // console.log(reviewDetails);
    const [data, setData] = useState(reviewDetails);
    // console.log(data);
    const {cover, title, review, year, rating, _id, genres, userName, email
    } = reviewDetails;
   

//   console.log(email);
        const handleAddWatchList = () => {
            const newData = {userEmail, userName, cover, title, review, year, rating,  genres};
            // console.log(newData);
            // console.log(newData);

            fetch('https://chill-game-server.vercel.app/myWatchList',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newData)
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: "Watchlist Added Successful!",
                        text: "You Are Successfully Added to watchList ",
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
                }
            })
            .catch(error => {
                // console.log(error.message);
            })
        }

    return (
        <div style={{  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${cover})`,  backgroundPosition: 'center',
        backgroundSize: 'cover',}} className="pt-20 min-h-screen  ">
             <Helmet>
             
             <title>Chill Gamer || Review Details</title>
            
         </Helmet>

            <div className="flex flex-col items-center mb-16">
                <h1 className="text-7xl text-white font-semibold">Review Details Of {title}</h1>
                <p className="text-xl text-white/80">The Review Details page displays comprehensive information about a specific review, including user ratings, feedback, review date, and related product details to help users make informed decisions.</p>
            </div>
         {/* Card */}
         <div className="grid grid-cols-4 gap-12 w-8/12 mx-auto py-8 px-6 border rounded-xl backdrop-blur-md bg-white/10 items-center">
           <div className="col-span-2">
           <img className="rounded-xl" src={cover} alt="" />
           </div>
           <div className="col-span-2">
                <h1 className="text-4xl text-white font-bold mb-4">{title}</h1>
                <p className="text-xl text-white/80">{review}</p>
                <p className="border mt-6 border-gray-500"></p>

                <div className="flex gap-8 ">
                    <p className="text-xl mt-4">Ratings:  <span className="text-xl text-white">{rating}</span></p>
                    <p className="text-xl mt-4">Publish Year:  <span className="text-xl text-white">{year}</span></p>
                </div>
                <p className="text-xl mt-4">Genre  <span className="text-xl text-white">{genres}</span></p>
                <p className="border mt-6 border-gray-500"></p>
                <div className="flex flex-col">
                <p className="text-xl mt-4">Reviewer Name :  <span className="text-xl text-white">{userName}</span></p>
                <p className="text-xl mt-2">Reviewer Email :  <span className="text-xl text-white">{email}</span></p>
                </div>
                <button onClick={handleAddWatchList} className="btn btn-ghost w-full border text-lg text-white border-white mt-4">Add To WatchList <CiHeart className="text-white-600  font-bold text-xl" /></button>
           </div>
         </div>
        </div>
    );
};

export default ReviewDetails;