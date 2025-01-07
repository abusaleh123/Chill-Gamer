import Swal from 'sweetalert2';
import modalImg from '../assets/modal.jpg';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { Zoom } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';

const MyReviewCard = ({ reviewss }) => {
    const { user, setUser, setLoading } = useContext(AuthContext);
    const [reviewssss, setReviewssss] = useState(Array.isArray(reviewss) ? reviewss : [reviewss]);

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
                fetch(`https://chill-game-server.vercel.app/myReview/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your review has been deleted.",
                            icon: "success"
                        });
                        setReviewssss(prevReviews => prevReviews.filter(rev => rev._id !== id));
                    }
                })
                .catch(error => {
                    console.error("Error deleting review:", error);
                });
            }
        });
    };

    return (
        <div className="bg-black rounded-xl pb-6">
            <Helmet>
                <title>Chill Gamer || My Review</title>
            </Helmet>
            <Zoom>
                {reviewssss.length > 0 ? (
                    <table className="table lg:w-8/12 mx-auto border pb-6">
                        <thead>
                            <tr className="lg:text-xl border pl-0 border-white">
                                <th>Image</th>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviewssss.map((review) => (
                                <tr key={review._id} className="border border-white w-96 items-center">
                                    <td><img className="lg:w-28 w-28 rounded-md" src={review.cover} alt="" /></td>
                                    <td className="md:text-2xl text-white">{review.title}</td>
                                    <td className="text-white md:text-2xl">{review.rating}</td>
                                    <td className="text-white md:text-2xl">{review.year}</td>
                                    <td className="py-12 flex flex-col md:flex-row md:gap-1 justify-center items-center mr-2 md:mr-0">
                                        <Link to={`/updateReview/${review._id}`} className="bg-purple-800 p-1 mb-1 md:mb-0 rounded-md md:w-auto md:text-lg text-white">
                                            <FaPen />
                                        </Link>
                                        <button onClick={() => handleDelete(review._id)} className="md:w-auto bg-rose-700 md:ml-2 rounded-md p-1 text-lg text-white hover:bg-red-700">
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : ''}
            </Zoom>
        </div>
    );
};

export default MyReviewCard;

