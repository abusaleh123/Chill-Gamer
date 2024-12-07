import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import bg from '../../src/assets/addreviewbg.jpg';
import modalImg from '../../src/assets/modal.jpg'
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';


const UpdateReview = () => {
    const navigate = useNavigate()
   const {id} = useParams();
   console.log(id);
    const updateReview = useLoaderData();
    console.log(updateReview);
    const [data, setData] = useState(updateReview);
    console.log(data);
    
    console.log(updateReview._id);

    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(updateReview.rating || 0);

    const handleRatingChange = (value) => {
        setRating(value);
        // defaultValue
        // console.log("Selected rating:", rating);
    };



    
    const handleUpdateReview = e => {
        e.preventDefault();
        const form = e.target;
        const cover = form.cover.value;
        const title = form.title.value;
        const review = form.review.value;
        const genres = form.genres.value;
        const email = form.email.value;
        const username = form.username.value;
        const year = form.year.value;

        const updateReview = {cover, title, review, genres,  rating, year, email, username}
        fetch(`https://chill-game-server.vercel.app/reviewss/${id}`, {
            method: "PUT",
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(updateReview)
          })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                      })
                      navigate('/myReview')
                    }
                // form.reset()
             
            })
            .catch(error => {
                // console.log(error.message);
            })


    }





    return (
        <div style={{backgroundImage: `url(${bg})` , backgroundSize: 'cover'}} className="bg-transparent text-white  min-h-screen flex items-center justify-center">
        <div className="w-full lg:w-8/12 border border-white-600 backdrop-blur-xl p-8 rounded-lg shadow-lg">
            <form onSubmit={handleUpdateReview} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <h2 className="lg:text-5xl text-white  rounded-xl   font-bold text-center col-span-1 md:col-span-2 mb-4">
                    Update Review Form
                </h2>

                {/* Game Cover Image */}
                <div className="col-span-2">
                    <label htmlFor="cover" className="block mb-2">
                        Game Cover Image (URL):
                    </label>
                    <input
                        type="url"
                        id="cover"
                        name="cover"
                        defaultValue={updateReview.cover}
                        placeholder="Enter game cover URL"
                        className="w-full p-2 border-2 border-gray-500 rounded bg-white/20 text-white hover:border-red-500 focus:border-red-500 focus:outline-none"
                        required
                    />
                </div>
                
                {/* Game Title */}
                <div className="col-span-1">
                    <label htmlFor="title" className="block mb-2">
                        Game Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={updateReview.title}
                        placeholder="Enter game title"
                        className="w-full p-2 border-2 border-gray-500 rounded  bg-white/20  text-white hover:border-red-500 focus:border-red-500 focus:outline-none"
                        required
                    />
                </div>

                {/* Review Description */}
                <div className="col-span-1 md:col-span-1">
                    <label htmlFor="review" className="block mb-2">
                        Review Description:
                    </label>
                    <input
                        id="review"
                        name="review"
                        defaultValue={updateReview.review}
                        placeholder="Write your review"
                        className="w-full p-2 border-2 border-gray-500 rounded bg-white/20  text-white hover:border-red-500 focus:border-red-500 focus:outline-none"
                        required
                   />
                </div>

                {/* Rating */}
                <div className="col-span-1  gap-2 items-center  ">
  <label  className="block  mb-2">
    Rating (1-5):
  </label>
  <div className="flex border gap-2 bg-white/20  p-2">
  <Rating
    initialRating={rating}
    emptySymbol={<FontAwesomeIcon icon={faStarEmpty} />}
    fullSymbol={<FontAwesomeIcon icon={faStarFull} />}
    fractions={4}
    onChange={handleRatingChange}
    className="text-yellow-400 text-xl"
    name= 'rating'
  />
  <p className="text-xl"> ({rating})</p>
  </div>
</div>

                {/* Publishing Year */}
                <div className="col-span-1">
                    <label htmlFor="year" className="block mb-2">
                        Publishing Year:
                    </label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        min="2000"
                        max="2024"
                        defaultValue={updateReview.year}
                        className="w-full p-2 border-2 border-gray-500 rounded bg-white/20  text-white hover:border-red-500 focus:border-red-500 focus:outline-none"
                        required
                    />
                </div>

                {/* Genres */}
                <div className="col-span-1">
                    <label htmlFor="genres" className="block mb-2">
                        Genres:
                    </label>
                    <select
                        id="genres"
                        name="genres"
                        className="w-full p-2 border-2 border-gray-500 rounded bg-white/20   text-black hover:border-red-500 focus:border-red-500 focus:outline-none"
                        required
                    >
                        <option value="Action">Action</option>
                        <option value="RPG">RPG</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Puzzle">Puzzle</option>
                        <option value="Sports">Sports</option>
                    </select>
                </div>

                {/* User Email */}
                <div className="col-span-1">
                    <label htmlFor="email" className="block mb-2">
                        User Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        readOnly
                        className="w-full p-2 border-2 border-gray-600 rounded bg-white/10  text-white cursor-not-allowed"
                    />
                </div>

                {/* User Name */}
                <div className="col-span-1">
                    <label htmlFor="username" className="block mb-2">
                        User Name:
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={user.displayName}
                        readOnly
                        className="w-full p-2 border-2 border-gray-600 rounded bg-white/10 text-white cursor-not-allowed"
                    />
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2">
                    <button
                        type="submit"
                        className="w-full btn btn-ghost border-white   text-lg font-bold py-2 rounded hover:border transition"
                    >
                       Update Review
                    </button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default UpdateReview;