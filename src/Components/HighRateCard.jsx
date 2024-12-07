import React from 'react';
import { Link } from 'react-router-dom';

const HighRateCard = ({high}) => {
    const {cover, title, review, year, rating, _id, genres, email} = high;
    console.log(high.email);
    // console.log(high);

    return (
        <div className='  mx-auto ' >
          
            {/* Card */}
            <div className='bg-white/20 backdrop-blur-md  pb-6 rounded-xl h-full text-white'>
                <img className=' object-cover rounded-t-xl' src={cover} alt="" />
               <div className='flex justify-between px-4 mt-2'>
               <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-white">Rating:</p>
                 <p className='text-xl'>{rating}/5</p>                
                 </div>

                <p className='text-lg font-bold'>Publish Year: <span className='text-xl font-normal'>{year}</span></p>
               </div>
               <div className="flex justify-between px-4 mt-2">
               <h1 className=' text-2xl font-semibold'>{title}</h1>
               <p className="text-lg">{genres}</p>
               </div>
               <p className="border-t-2 w-11/12 mx-auto my-4"> </p>
               <p className='text-white/70 px-2'>{review}</p>

               <Link to={`/reviews/${high._id}`} className='btn w-11/12 mx-auto text-lg hover:font-bold  flex mt-4 btn-ghost border border-white hover:border-white'>Explore Now</Link>
            </div>
        </div>
    );
};

export default HighRateCard;