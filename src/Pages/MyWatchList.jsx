import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import WatchListTable from "../Components/WatchListTable";


const MyWatchList = () => {
    const {user} = useContext(AuthContext);
    const watchList = useLoaderData();
    // console.log(watchList);
    const [myWatchList, setMyWatchList] = useState(watchList);
    // console.log(myWatchList);

    // const emaill = user.email;
    // console.log(emaill);
    const newWatchList = watchList.filter(watch => watch.userEmail === user.email);

    return (
        <div className="">

<div className="bg-black flex flex-col items-center py-12 lg:py-16 ">
        <h1 className="text-6xl font-semibold text-white">My Watch List</h1>
        <p className="text-xl mt-2">Here Is All My watch List that I added</p>
      </div>
             <div className="bg-black">
             {
  newWatchList.length > 0 ? (
    newWatchList.map(watchListAdd => (
      <WatchListTable key={watchListAdd._id} watchListAdd={watchListAdd} />
    ))
  ) : (
   <div className="py-48 border rounded-xl bg-[#A70088]">
    <p className="text-white flex justify-center text-7xl ">No WatchList Added</p>
    <p className="text-2xl flex justify-center">It seems you haven’t added any WatchList yet. Start sharing your experiences now!</p>
   </div>
  )
}
             </div>
        </div>
    );
};

export default MyWatchList;
