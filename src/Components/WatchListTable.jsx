import React from 'react';

const WatchListTable = ({watchListAdd}) => {
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
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="border border-white ">
        <td className=" "><img className="lg:w-28 w-96 rounded-md" src={watchListAdd.cover} alt="" /></td>
        <td className="text-2xl text-white ">{watchListAdd.title}</td>
        <td className="text-white text-2xl">{watchListAdd.rating}</td>
        <td className="text-white text-2xl">{watchListAdd.year}</td>
       
        
         
      
      </tr>
    
    </tbody>
  </table>
      </div>
    );
};

export default WatchListTable;