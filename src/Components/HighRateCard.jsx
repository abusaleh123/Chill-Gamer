import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Fade, Zoom } from 'react-awesome-reveal';

const HighRateCard = ({high}) => {
    const {user} = useContext(AuthContext)
    const {cover, title, review, year, rating, _id, genres, email} = high;
    // console.log(high.email);
    // console.log(high);

    return (
        <div className='  mx-auto ' >
          
          
            <Zoom>
            <div className='bg-white/20 backdrop-blur-md  pb-6 rounded-xl h-full text-white'>
                <img className=' object-cover h-72 w-full rounded-t-xl' src={cover} alt="" />
               <div className='flex justify-between px-4 mt-2'>
               <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-white rating rating-sm">
                    <input type="radio" name="rating-9" className="rating-hidden" />
                    <input type="radio" name="rating-9" className="mask mask-star-2" />

                    </p>
                 <p className='text-xl'>{rating}/5</p>                
                 </div>

                <p className='text-lg font-bold'><span className='text-xl font-normal'>{year}</span></p>
               </div>
               <div className="flex justify-between px-4 mt-2">
               <h1 className=' text-2xl font-semibold'>{title}</h1>
               <p className="text-lg">{genres}</p>
               </div>
               <p className="border-t-2 w-11/12 mx-auto my-4"> </p>
               <p className='text-white/70 h-20 px-2'>{review}</p>

               <Link to={user ? `/reviews/${high._id}` : `/login`} className='btn w-11/12 mx-auto text-lg hover:font-bold  flex mt-4 btn-ghost border border-white hover:border-white'>Explore Now</Link>
            </div>
            </Zoom>
        </div>
    );
};

export default HighRateCard;