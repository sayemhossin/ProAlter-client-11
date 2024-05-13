import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import MyQuery from "./MyQuery";
import { Link } from "react-router-dom";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);


const url = `http://localhost:5000/myquery/${user?.email}`


  useEffect(() => {
    if(user?.email){
      setLoading(true);
    fetch(url, {credentials:'include'})
      .then((res) => res.json())
      .then((data) => {
        setQueries(data);
        setLoading(false);
      });
    }
  }, [user,url]);
  const handleDeleteQuery = (queryId) => {
    setQueries(prevQueries => prevQueries.filter(query => query._id !== queryId));
  };



  return (
    <div className="mb-12">
      <div>
        <div className="hero h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/WBsP8wX/lovepik-blue-information-network-background-image-500325572.jpg)' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl md:text-6xl text-blue-200 font-bold">Dive into Your Queries</h1>

              <Link to={'/addquery'}> <button className="btn hover:bg-blue-800 mt-6  text-white bg-blue-600">Add Query</button></Link>
            </div>
          </div>
        </div>
      </div>







      {loading ? (
       <div className="h-screen flex w-full justify-center items-center">
       <span className="loading  text-blue-500 loading-spinner loading-lg"></span>
           
           </div>
      ) : queries.length === 0 ? (
        <div>

          

          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src="https://i.ibb.co/FsVxJ6L/file-3.png" className=" rounded-lg " />
              <div>
                <h1 className="text-2xl md:text-5xl text-blue-800 font-bold">Opps! <br /> Looks Like You Don't Added Any Queries</h1>

                <Link to={'/addquery'}> <button className="btn hover:bg-blue-800 mt-6  text-white bg-blue-600">Add Query</button></Link>
              </div>
            </div>
          </div>



        </div>
      ) : (
        
       <div>

<div className="text-center md:mb-20 mb-10">
                <h1 className="text-xl mt-10 md:text-4xl md:mt-20   font-bold text-blue-900 underline">All The Query Hare Added By You</h1>
              
            </div>
         <div className=" grid gap-5  mt-10">
          {
            queries.map((query) => <MyQuery key={query._id}
              query={query}
              onDelete={handleDeleteQuery}
            />)
          }
        </div>
       </div>
      )}
    </div>
  );
};

export default MyQueries;
