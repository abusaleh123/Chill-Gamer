import React from 'react';
import question from '../assets/question.jpg'

const Question = ({isDarkMode}) => {
    return (
        <div className={` lg:pt-20 mx-auto ${isDarkMode ? "bg-black text-white" : "bg-gray-400"}`}>
            <div className={`flex justify-center flex-col items-center text-center space-y-2 lg:w-10/12 mx-auto  ${isDarkMode ? " text-white" : "text-black"}`}>
                <h1 className="lg:text-6xl text-2xl mt-6 font-bold">Explore the Chill Game</h1>
                <p className="lg:text-xl">This section allows users to dive into the world of gaming through game reviews, ratings, and recommendations. It features top-rated games, recent reviews, and personalized game suggestions. Users can explore detailed game information, read community reviews, and share their gaming experiences. With an intuitive and chill design, this section ensures a fun and interactive game discovery journey.</p>
            </div>
<div className="grid grid-cols-1 items-center  md:grid-cols-2 py-20 w-10/12  mx-auto">




    
<div className={`  mx-auto ${isDarkMode ? "bg-black text-white" : "bg-gray-400"}`}>
           <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border-red-600 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title lg:text-2xl  font-medium"> Why should users create an account?</div>
    <div className="collapse-content">
      <p className='lg:text-lg'>To write reviews, rate games, manage favorites, and access personalized features.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-red-600 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title lg:text-2xl  font-medium"> What games are shown on the homepage?</div>
    <div className="collapse-content">
      <p className='lg:text-lg'>Popular, top-rated, and recently reviewed games are displayed on the homepage.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-red-600 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title lg:text-2xl  font-medium"> How detailed is the game page?</div>
    <div className="collapse-content">
      <p className='lg:text-lg'>It includes game summaries, ratings, reviews, screenshots, and developer information.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-red-600 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title lg:text-2xl  font-medium">  Can users edit or delete their reviews?</div>
    <div className="collapse-content">
      <p className='lg:text-lg'>Yes, reviews can be updated or deleted at any time.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-red-600 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title lg:text-2xl  font-medium">How does the platform recommend games?</div>
    <div className="collapse-content">
      <p className='lg:text-lg'>Based on a user's previous reviews, ratings, and favorites</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-red-600 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title lg:text-2xl  font-medium"> How is user activity tracked?</div>
    <div className="collapse-content">
      <p className='lg:text-lg'>User activity, such as reviews posted and games rated, appears on a personalized dashboard.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-red-600 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title lg:text-2xl  font-medium">What tech stack should be used?</div>
    <div className="collapse-content">
      <p className='lg:text-lg'> Frontend: React.js; Backend: Express.js; Database: MongoDB; Authentication: Firebase.
      </p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-red-600 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title lg:text-2xl  font-medium">  Is the platform mobile-friendly?</div>
    <div className="collapse-content">
      <p className='lg:text-lg'>Yes, the UI is designed to be fully responsive using CSS frameworks like Tailwind CSS.
      </p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-red-600 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title lg:text-2xl  font-medium"> What makes Chill Gamer unique?</div>
    <div className="collapse-content">
      <p className='lg:text-lg'>Its focus on user-friendly design, personalized reviews, and community-driven game recommendations.
      </p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-red-600 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title lg:text-2xl  font-medium"> Will there be a dark mode?
    </div>
    <div className="collapse-content">
      <p className='lg:text-lg'>Yes, users can toggle between light and dark modes for a personalized experience.
      </p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-red-600 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title lg:text-2xl  font-medium">  How are games categorized?
    </div>
    <div className="collapse-content">
      <p className='lg:text-lg'>Games are grouped by genres, platforms (PC, PS5, Xbox, etc.), and release dates.
      </p>
    </div>
  </div>

</div>
        </div>

        <div>
   <img className='rounded-xl ' src={question} alt="" />
</div>
</div>
        </div>
    );
};

export default Question;