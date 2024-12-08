import { useLoaderData } from "react-router-dom";
import bg from '../assets/allreview.jpg'
import AllReviewCard from "../Components/AllReviewCard";
import { useState } from "react";


const AllReviews = () => {

    const allReview = useLoaderData();
    const [reviews, setReviews] = useState(allReview)
    // console.log(allReview);

    const handleSort = (sortBy, ratingYear) => {
        const sortedReviews = [...reviews].sort((a, b) => {
          if (ratingYear === "asc") {
            return a[sortBy] > b[sortBy] ? 1 : -1;
          } else {
            return a[sortBy] < b[sortBy] ? 1 : -1;
          }
        });
        setReviews(sortedReviews);
      };


      const handleFilterByGenre = (genre) => {
        if (genre === "all") {
          setReviews(allReview); // Show all reviews if "All Genres" is selected
        } else {
          const filteredReviews = allReview.filter((review) => review.genres === genre);
          setReviews(filteredReviews); // Filter reviews based on the selected genre
        }
      };
    
      // Get unique genres from the reviews data
      const genres = Array.from(new Set(allReview.map((review) => review.genres)));
    return (
        <div style={{  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,  backgroundPosition: 'center',
        backgroundSize: 'cover',}}className="min-h-screen pb-10 lg:pb-28">
           <div className="flex flex-col items-center "> 
            <h1 className="lg:text-7xl text-2xl text-white mt-12">All Reviews</h1>
            <p className="text-xl text-white/80 text-center mt-2">The All Reviews page showcases a collection of user reviews, featuring game titles, ratings, genres, and summaries, allowing users to explore and evaluate various reviews in one place.</p>
           </div>


        {/* Sort & Genre Dropdowns */}
        <div className="flex justify-center gap-4 mt-10 mb-16">
        {/* Sort By Dropdown */}
        <div className="dropdown dropdown-hover">
          <button className="btn btn-ghost border text-lg border-white">Sort By</button>
          <ul className="dropdown-content text-black  bg-white shadow-md rounded-lg p-2 w-48 z-50">
            <li>
              <button
                className="btn btn-ghost w-full lg:text-lg text-left"
                onClick={() => handleSort("rating", "asc")}
              >
               Sort Rating (Asc)
              </button>
            </li>
            <li>
              <button
                className="btn btn-ghost w-full lg:text-lg text-left"
                onClick={() => handleSort("rating", "desc")}
              >
              Sort Rating (Desc)
              </button>
            </li>
            <li>
              <button
                className="btn btn-ghost w-full lg:text-lg text-left"
                onClick={() => handleSort("year", "asc")}
              >
                Sort Year (Asc)
              </button>
            </li>
            <li>
              <button
                className="btn btn-ghost w-full lg:text-lg text-left"
                onClick={() => handleSort("year", "desc")}
              >
                Sort Year (Desc)
              </button>
            </li>
          </ul>
        </div>

        {/* Filter by Genre Dropdown */}
        <div className="dropdown dropdown-hover">
          <button className="btn btn-ghost border text-lg border-white">Filter by Genre</button>
          <ul className="dropdown-content text-black bg-white shadow-md rounded-lg p-2 w-48 z-50">
            {/* All Genres Option */}
            <li>
              <button
                className="btn btn-ghost w-full lg:text-lg text-left"
                onClick={() => handleFilterByGenre("all")}
              >
                All Genres
              </button>
            </li>
            {/* Dynamic Genre Options */}
            {genres.map((genre) => (
              <li key={genre}>
                <button
                  className="btn btn-ghost w-full lg:text-lg text-left"
                  onClick={() => handleFilterByGenre(genre)}
                >
                  {genre}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>





<div className="w-10/12 pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

{
            reviews.map(reviews => <AllReviewCard key={reviews._id} reviews={reviews}></AllReviewCard>)
           }
</div>
        </div>
    );
};

export default AllReviews;