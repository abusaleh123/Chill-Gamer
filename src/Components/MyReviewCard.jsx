import Swal from 'sweetalert2';
import bg from '../assets/slider11.jpg'
import modalImg from '../assets/modal.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useParams } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { Fade, Zoom } from 'react-awesome-reveal';



const MyReviewCard = ({review, reviewss, id}) => {

    const {user, setUser, setLoading} = useContext(AuthContext)
const [reviewssss, setReviewssss] = useState(reviewss);
// console.log(reviews);
// console.log(reviewssss._id);
const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      background: `url(${modalImg}) no-repeat center top`, 
      backgroundSize: 'cover', 
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with DELETE request
        // console.log(reviewss._id);
        fetch(`https://chill-game-server.vercel.app/myReview/${reviewss._id}`, {
         
          method: "DELETE"
        })
          .then(res => {
            // console.log(res);
           return res.json()
          })
          .then(data => {
            // console.log(data);
            // setLoading(true)
            if (data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success"
             
              });
              const remainingReviews = reviewss.filter(rev => rev._id !== id);
              setReviewssss(remainingReviews ) 
          
               
           
             
              
            }
            // const remaining = review.filter(rev => rev._id !== _id);
            //   setUser(remaining)
          })
          .catch(error => {
            console.log(error);
          })
      }
    });
  };
    return (
        <div  className=" bg-black rounded-xl  pb-6">
        <Zoom>
        <table className="table   lg:w-8/12 mx-auto border pb-6 ">

    <thead>
      <tr className="lg:text-xl border pl-0 border-white  ">
        <th className="">Image</th>
        <th>Name</th>
        <th>Rating</th>
        <th>Favorite Color</th>
        {/* <th>Delete/Update</th> */}
      </tr>
    </thead>
    <tbody>

      <tr className="border border-white w-96 items-center">
        <td className=" "><img className="lg:w-28 w-28 rounded-md" src={reviewss.cover} alt="" /></td>
        <td className="md:text-2xl text-white ">{reviewss.title}</td>
        <td className="text-white md:text-2xl">{reviewss.rating}</td>
        <td className="text-white md:text-2xl">{reviewss.year}</td>

        <div className="py-12 flex flex-col md:flex-row md:gap-1 justify-center items-center mr-2 md:mr-0">
       <Link to={`/updateReview/${reviewss._id}`}  className=" bg-purple-800 p-1 mb-1 md:mb-0 rounded-md md:w-auto    md:text-lg text-white "><FaPen /></Link> 
       <button onClick={() => handleDelete(reviewss._id)} className="  md:w-auto  bg-rose-700 md:ml-2 rounded-md p-1 text-lg text-white hover:bg-red-700"><MdDelete  /></button>
       </div>
        
         
      
      </tr>
    
    </tbody>
  </table>
  </Zoom>
      </div>
    );
};

export default MyReviewCard;