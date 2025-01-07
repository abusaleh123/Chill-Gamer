import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const FeaturedGames = () => {
  const [featured, setFeatured] = useState([]);
  const {user} = useContext(AuthContext)
 

  console.log(featured);
  useEffect(() => {
    fetch('https://chill-game-server.vercel.app/featuredReviews')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setFeatured(data)
    })
    .catch(error => {
        console.log(error);
    })
  },[])

  return (
    <div className='bg-black text-center'>
    <section className="featured-games p-6 w-10/12 mx-auto lg:py-20 py-10 md:py-12">
      <h2 className="lg:text-7xl text-4xl  font-bold mb-3">Featured Games</h2>
      <p className="text-lg mb-16 ">Explore the best featured games with exciting reviews, ratings, and insights to enhance your gaming adventure.</p>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {featured.map((game, index) => (
          <div key={index} className="game-card bg-black border rounded-lg shadow-lg p-4">
            <img src={game.cover} alt={game.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{game.title}</h3>
            <p className="text-md text-gray-400">{game.genres}</p>
         
            <Link to={user ? `/reviews/${game._id}` : `/login`} className='btn w-11/12 mx-auto text-lg hover:font-bold  flex mt-4 btn-ghost border border-white hover:border-white'>Details</Link>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default FeaturedGames;
