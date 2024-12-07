import React from "react";
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'
import avatar4 from '../assets/avatar3.jpeg'
import avatar5 from '../assets/avatar5.jpeg'
import avatar6 from '../assets/avatar6.jpeg'
const TopGamers = ({isDarkMode}) => {
  return (
    <section className={`${isDarkMode ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-8' : 'bg-white/50'}`}>
      <div className="text-center lg:mt-20">
        <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} mb-4`}>Player’s Spotlight</h2>
        <p className={` md:text-xl  ${isDarkMode ? 'text-gray-300' : 'text-black'} text-lg`}>
          Meet the top gamers making waves in our community!
        </p>
      </div>

      {/* Static User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
          <img
            src={avatar1}
            alt="GamerPro21"
            className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
          />
          <h3 className="text-xl font-semibold text-white text-center">
            GamerPro21
          </h3>
          <p className="text-gray-400 text-center italic">
            "Passionate about RPGs and strategy games."
          </p>
          <div className="mt-4 text-center space-y-2">
            <p className="text-yellow-400 font-bold">Reviews: 45</p>
            <p className="text-green-400 font-bold">Games Rated: 120</p>
          </div>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full">
            View Profile
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
          <img
            src={avatar2}
            alt="PixelHunter"
            className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
          />
          <h3 className="text-xl font-semibold text-white text-center">
            PixelHunter
          </h3>
          <p className="text-gray-400 text-center italic">
            "Finding hidden gems in the indie scene."
          </p>
          <div className="mt-4 text-center space-y-2">
            <p className="text-yellow-400 font-bold">Reviews: 60</p>
            <p className="text-green-400 font-bold">Games Rated: 200</p>
          </div>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full">
            View Profile
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
          <img
            src={avatar3}
            alt="QuestMaster"
            className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
          />
          <h3 className="text-xl font-semibold text-white text-center">
            QuestMaster
          </h3>
          <p className="text-gray-400 text-center italic">
            "Lover of epic adventures and open worlds."
          </p>
          <div className="mt-4 text-center space-y-2">
            <p className="text-yellow-400 font-bold">Reviews: 38</p>
            <p className="text-green-400 font-bold">Games Rated: 95</p>
          </div>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full">
            View Profile
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
          <img
            src={avatar4}
            alt="GamerPro21"
            className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
          />
          <h3 className="text-xl font-semibold text-white text-center">GamerPro21</h3>
          <p className="text-gray-400 text-center italic">"Passionate about RPGs and strategy games."</p>
          <div className="mt-4 text-center space-y-2">
            <p className="text-yellow-400 font-bold">Reviews: 45</p>
            <p className="text-green-400 font-bold">Games Rated: 120</p>
          </div>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full">
            View Profile
          </button>
        </div>

        {/* User 2 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
          <img
            src={avatar5}
            alt="PixelHunter"
            className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
          />
          <h3 className="text-xl font-semibold text-white text-center">PixelHunter</h3>
          <p className="text-gray-400 text-center italic">"Finding hidden gems in the indie scene."</p>
          <div className="mt-4 text-center space-y-2">
            <p className="text-yellow-400 font-bold">Reviews: 60</p>
            <p className="text-green-400 font-bold">Games Rated: 200</p>
          </div>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full">
            View Profile
          </button>
        </div>

        {/* User 3 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
          <img
            src={avatar6}
            alt="QuestMaster"
            className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
          />
          <h3 className="text-xl font-semibold text-white text-center">QuestMaster</h3>
          <p className="text-gray-400 text-center italic">"Lover of epic adventures and open worlds."</p>
          <div className="mt-4 text-center space-y-2">
            <p className="text-yellow-400 font-bold">Reviews: 38</p>
            <p className="text-green-400 font-bold">Games Rated: 95</p>
          </div>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full">
            View Profile
          </button>
        </div>

        {/* User 4 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
          <img
            src={avatar1}
            alt="StealthNinja"
            className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
          />
          <h3 className="text-xl font-semibold text-white text-center">StealthNinja</h3>
          <p className="text-gray-400 text-center italic">"Master of stealth and strategy games."</p>
          <div className="mt-4 text-center space-y-2">
            <p className="text-yellow-400 font-bold">Reviews: 75</p>
            <p className="text-green-400 font-bold">Games Rated: 150</p>
          </div>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full">
            View Profile
          </button>
        </div>

        {/* User 5 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
          <img
            src={avatar2}
            alt="TurboGamer"
            className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
          />
          <h3 className="text-xl font-semibold text-white text-center">TurboGamer</h3>
          <p className="text-gray-400 text-center italic">"Speedruns and racing games are my life."</p>
          <div className="mt-4 text-center space-y-2">
            <p className="text-yellow-400 font-bold">Reviews: 50</p>
            <p className="text-green-400 font-bold">Games Rated: 180</p>
          </div>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full">
            View Profile
          </button>
        </div>

        {/* User 6 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-300">
          <img
            src={avatar3}
            alt="ArcadeQueen"
            className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
          />
          <h3 className="text-xl font-semibold text-white text-center">ArcadeQueen</h3>
          <p className="text-gray-400 text-center italic">"Lover of classic arcade and action games."</p>
          <div className="mt-4 text-center space-y-2">
            <p className="text-yellow-400 font-bold">Reviews: 90</p>
            <p className="text-green-400 font-bold">Games Rated: 220</p>
          </div>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full">
            View Profile
          </button>
        </div>




      </div>




      

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <p className="text-gray-300 text-lg">Want to be featured here?</p>
        <a
          href="/write-review"
          className="text-blue-500 font-semibold underline hover:text-blue-400"
        >
          Start Reviewing Now!
        </a>
      </div>
    </section>
  );
};

export default TopGamers;
