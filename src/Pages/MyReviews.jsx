import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import MyReviewCard from "../Components/MyReviewCard";


const MyReviews = () => {
  const {user} = useContext(AuthContext)
  const reviews = useLoaderData();
  const [reviewUser, setReviewUser] = useState(reviews);
  console.log(reviewUser);
  console.log(reviews);
const email = user.email
  const myReview = reviews.filter(review => review.email === email);
  console.log(myReview);
  return (
    <div>
      <div className="bg-black flex flex-col items-center lg:py-16 ">
        <h1 className="text-6xl font-semibold text-white">My Review</h1>
        <p className="text-xl mt-2">Here Is All My review that i added</p>
      </div>
      <div>
      <div className="overflow-x-auto bg-black">
 
</div>
      </div>
    <div className="bg-black">
     {/* {
      myReview.map(review => {
        if(review.length > 0){
          return        <MyReviewCard key={review._id} review={review}></MyReviewCard>
        }
        else{
          <p className="text-white">No Data Add</p>
        }
      } )
     } */}
     {
  reviewUser.length > 0 ? (
    reviewUser.map(reviewUser => (
      <MyReviewCard key={reviewUser._id} reviewUser={reviewUser} />
    ))
  ) : (
   <div className="py-48 border rounded-xl bg-[#A70088]">
    <p className="text-white flex justify-center text-7xl ">No Review Added</p>
    <p className="text-2xl flex justify-center">It seems you haven’t added any reviews yet. Start sharing your experiences now!</p>
   </div>
  )
}
    </div>
    </div>
  );
};

export default MyReviews;