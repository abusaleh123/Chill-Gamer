import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

const AddReviews = () => {
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(0);

    const handleRatingChange = (value) => {
        setRating(value);
        console.log("Selected rating:", value);
    };

    return (
        <div className="bg-black text-white  min-h-screen flex items-center justify-center">
            <div className="w-full lg:w-8/12 border border-red-600 bg-black p-8 rounded-lg shadow-lg">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <h2 className="text-2xl font-bold text-center col-span-1 md:col-span-2 mb-4">
                        Game Review Form
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
                            placeholder="Enter game cover URL"
                            className="w-full p-2 border-2 border-gray-500 rounded bg-black text-white hover:border-red-500 focus:border-red-500 focus:outline-none"
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
                            placeholder="Enter game title"
                            className="w-full p-2 border-2 border-gray-500 rounded bg-black text-white hover:border-red-500 focus:border-red-500 focus:outline-none"
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
                            
                            placeholder="Write your review"
                            className="w-full p-2 border-2 border-gray-500 rounded bg-black text-white hover:border-red-500 focus:border-red-500 focus:outline-none"
                            required
                       />
                    </div>

                    {/* Rating */}
                    <div className="col-span-1  gap-2 items-center  ">
      <label  className="block  mb-2">
        Rating (1-5):
      </label>
      <div className="flex border p-2">
      <Rating
        initialRating={rating}
        emptySymbol={<FontAwesomeIcon icon={faStarEmpty} />}
        fullSymbol={<FontAwesomeIcon icon={faStarFull} />}
        fractions={2}
        onChange={handleRatingChange}
        className="text-yellow-400 text-xl"
      />
      <p className=""> ({rating})</p>
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
                            min="2021"
                            max="2024"
                            className="w-full p-2 border-2 border-gray-500 rounded bg-black text-white hover:border-red-500 focus:border-red-500 focus:outline-none"
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
                            className="w-full p-2 border-2 border-gray-500 rounded bg-black text-white hover:border-red-500 focus:border-red-500 focus:outline-none"
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
                            className="w-full p-2 border-2 border-gray-600 rounded bg-gray-800 text-white cursor-not-allowed"
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
                            className="w-full p-2 border-2 border-gray-600 rounded bg-gray-800 text-white cursor-not-allowed"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            className="w-full btn btn-ghost border-white hover:bg-purple-600  text-lg font-bold py-2 rounded hover:border transition"
                        >
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReviews;
