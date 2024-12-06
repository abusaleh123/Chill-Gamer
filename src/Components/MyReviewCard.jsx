import Swal from 'sweetalert2';
import bg from '../assets/slider11.jpg'
import modalImg from '../assets/modal.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';



const MyReviewCard = ({review, reviewUser}) => {
  console.log(reviewUser);
    const {user, setUser, setLoading} = useContext(AuthContext)
const [reviews, setReviews] = useState(review);
console.log(reviews);

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
        fetch(`http://localhost:5000/myReview/${reviewUser._id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            // setLoading(true)
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success"
              });
          
                const remainingReviews = reviewUser.filter(rev => rev._id !== id);
               setUser(remainingReviews ) 
           
             
              
            }
            // const remaining = review.filter(rev => rev._id !== _id);
            //   setUser(remaining)
          })
      }
    });
  };
    return (
        <div  className=" bg-black rounded-xl">
        
        <table className="table w-8/12 mx-auto border mb-6 ">
    {/* head */}
    <thead>
      <tr className="lg:text-xl border border-white  ">
        <th className="">Image</th>
        <th>Name</th>
        <th>Rating</th>
        <th>Favorite Color</th>
        <th>Delete/Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="border border-white ">
        <td className=" "><img className="lg:w-28 w-96 rounded-md" src={reviewUser.cover} alt="" /></td>
        <td className="text-2xl text-white ">{reviewUser.title}</td>
        <td className="text-white text-2xl">{reviewUser.rating}</td>
        <td className="text-white text-2xl">{reviewUser.year}</td>
        {/* {/* <td><button>Delete</button></td> */}
       <div className="py-2">
       <td><Link to={`/updateReview/${reviewUser._id}`}  className="btn btn-ghost border  border-white hover:border-white text-lg text-white hover:bg-purple-800">Update</Link></td> 
       <td><button onClick={() => handleDelete(reviewUser._id)} className="btn btn-ghost border border-white hover:border-white text-lg text-white hover:bg-red-700">Delete</button></td> 
       </div>
        
         
      
      </tr>
    
    </tbody>
  </table>
      </div>
    );
};

export default MyReviewCard;