import { Link } from "react-router-dom";


const AllReviewCard = ({reviews}) => {
    const {cover, title, useName, email, review, rating, year } = reviews;

    return ( 
        <div>
            <div className='bg-white/20 backdrop-blur-md  pb-6 rounded-xl h-full text-white'>
                <img className=' object-cover rounded-t-xl' src={cover} alt="" />
               <div className='flex justify-between px-4 mt-2'>
               <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-white">Rating:</p>
                 <p className='text-xl'>{rating}/5</p>                
                 </div>

                <p className='text-lg font-bold'>Publish Year: <span className='text-xl font-normal'>{year}</span></p>
               </div>
               <h1 className='px-2 text-2xl font-semibold'>{title}</h1>
               <p className='text-white/70 px-2'>{review}</p>

               <Link to={`/reviews/${reviews._id}`} className='btn w-11/12 mx-auto text-lg hover:font-bold  flex mt-4 btn-ghost border border-white hover:border-white'>Explore Now</Link>
            </div>
        </div>
    );
};

export default AllReviewCard;