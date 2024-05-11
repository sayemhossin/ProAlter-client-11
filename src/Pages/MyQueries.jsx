import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import MyQuery from "./MyQuery";
import { Link } from "react-router-dom";

const MyQueries = () => {
    const { user } = useContext(AuthContext);
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);




    
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/myquery/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setQueries(data);
                setLoading(false);
            });
    }, [user]);
    const handleDeleteQuery = (queryId) => {
      setQueries(prevQueries => prevQueries.filter(query => query._id !== queryId));
  };



    return (
        <div>
            <div>
            <div className="hero h-[80vh]" style={{backgroundImage: 'url(https://i.ibb.co/WBsP8wX/lovepik-blue-information-network-background-image-500325572.jpg)'}}>
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
                <p>Loading...</p>
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
                <div className=" grid gap-5  mt-10">
                   {
                     queries.map((query) => <MyQuery key={query._id}
                      query={query}
                      onDelete={handleDeleteQuery}
                      />)
                   }
                </div>
            )}
        </div>
    );
};

export default MyQueries;
