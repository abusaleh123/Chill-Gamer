import React, { useEffect, useState } from 'react';
import HighRateCard from './HighRateCard';
import bg from '../../src/assets/slider22.jpg'

const HighRated = () => {
    const [highRate, setHighRate] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setHighRate(data))
        .catch(error => {
            console.log(error.message);
        })
    },[])

    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}} className='bg-black '>
            <div className='flex flex-col justify-center items-center pt-12'>
                <h1 className="lg:text-7xl font-bold text-white">Highest Rated Game</h1>
                <p className='text-xl text-white/80 mt-2 mb-10'>A visually stunning open-world adventure with engaging combat, deep storytelling, rich lore, and dynamic gameplay that captivates players</p>
            </div>

           <div  className='w-10/12 pt-10 mx-auto grid grid-cols-3 gap-10'>
           {
                highRate.map(high => <HighRateCard key={high._Id} high={high}></HighRateCard> )
            }
           </div>
        </div>
    );
};

export default HighRated;