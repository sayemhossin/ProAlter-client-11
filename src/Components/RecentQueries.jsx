import { useEffect, useState } from "react";
import RecentQuery from "./RecentQuery";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecentQueries = () => {

    const [queries,setQueries] = useState([])

useEffect(()=>{
    fetch('https://assignment-11-server-pi-six.vercel.app/allquerys')
    .then(res => res.json())
            .then(data => {
               setQueries(data)
            })
},[])



    return (
        <div>
         <div  className="grid grid-cols-1  md:mx-2 lg:mx-20 md:grid-cols-2 lg:grid-cols-4 gap-5">
         {
            queries.slice(0,8).map(query => <RecentQuery key={query._id} query={query}></RecentQuery>)
          }
         </div>
         <div className="text-center">
          <Link to={'/queries'}>  <button className="btn text-xl btn-link md:text-2xl mt-8 mb-9">View All <FaArrowRight/> </button></Link>
         </div>
        </div>
    );
};


export default RecentQueries;