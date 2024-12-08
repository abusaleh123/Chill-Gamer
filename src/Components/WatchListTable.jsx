import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const WatchListTable = ({watchListAdd}) => {
    return (
        <div  className=" bg-black rounded-xl pb-10">
        <Zoom>
        <table className="table w-11/12 md:w-8/12 mx-auto border pb-6 ">
   
    <thead>
      <tr className="lg:text-xl border border-white  ">
        <th className="">Image</th>
        <th>Name</th>
        <th>Rating</th>
        <th>Favorite Color</th>
       
      </tr>
    </thead>
    <tbody>
    
      <tr className="border border-white ">
        <td className=" "><img className="lg:w-28 w-96 rounded-md" src={watchListAdd.cover} alt="" /></td>
        <td className="text-2xl text-white ">{watchListAdd.title}</td>
        <td className="text-white text-2xl">{watchListAdd.rating}</td>
        <td className="text-white text-2xl">{watchListAdd.year}</td>
       
        
         
      
      </tr>
    
    </tbody>
  </table>
  </Zoom>
      </div>
    );
};

export default WatchListTable;