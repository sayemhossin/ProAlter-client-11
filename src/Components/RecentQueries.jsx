import { useEffect, useState } from "react";
import RecentQuery from "./RecentQuery";

const RecentQueries = () => {

    const [queries,setQueries] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/allquerys')
    .then(res => res.json())
            .then(data => {
               setQueries(data)
            })
},[])



    return (
        <div>
         <div className="grid grid-cols-1 md:mx-20 md:grid-cols-2 lg:grid-cols-4 gap-5">
         {
            queries.map(query => <RecentQuery key={query._id} query={query}></RecentQuery>)
          }
         </div>
        </div>
    );
};


export default RecentQueries;