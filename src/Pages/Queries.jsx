import { useEffect, useState } from "react";



const Queries = () => {


    const [queries,setQueries] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/allquery')
    .then(res => res.json())
            .then(data => {
               setQueries(data)
            })
},[])

// console.log(queries)

    return (
        <div>
          
        </div>
    );
};

export default Queries;