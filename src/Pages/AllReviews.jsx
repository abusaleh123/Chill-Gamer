import { useLoaderData } from "react-router-dom";
import bg from '../assets/allreview.jpg'
import AllReviewCard from "../Components/AllReviewCard";


const AllReviews = () => {

    const allReview = useLoaderData();
    console.log(allReview);
    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} className="min-h-screen">
           <div className="flex flex-col items-center"> 
            <h1 className="lg:text-7xl text-white mt-12">All Reviews</h1>
            <p className="text-xl text-white/80 mt-2">The All Reviews page showcases a collection of user reviews, featuring game titles, ratings, genres, and summaries, allowing users to explore and evaluate various reviews in one place.</p>
           </div>

<div className="w-10/12 pt-10 mx-auto grid grid-cols-3 gap-10">

{
            allReview.map(reviews => <AllReviewCard key={reviews._id} reviews={reviews}></AllReviewCard>)
           }
</div>
        </div>
    );
};

export default AllReviews;