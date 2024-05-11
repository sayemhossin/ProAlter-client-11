import { Link } from "react-router-dom";

const Query = ({query}) => {
    return (
        
        <div className="card bg-base-100 shadow-xl p-6  ">
            
        <div className=" p-8">
        <img src={query.photo} alt="photo" />
        </div>




        <div className="card-body p-6 ">
            
          <h2 className="card-title">{query.title}</h2>
          <h2 className=""> <span className="font-semibold">Product Name: </span>{query.product}</h2>
          <h2 className=""><span className="font-semibold">Brand Name</span> {query.brand}</h2>
          <h2 className=""> <span className="font-semibold text-red-500">Alternation Reason: </span> {query.boycott_reason}</h2>
          <h2 className="text-green-500 font-semibold"><span className="font-semibold text-gray-800">Posted Date:</span> {query.added_by.date}</h2>

<div>
    <h1 className="text-center font-bold underline mt-3">Query Added by</h1>
    <div className="flex justify-around items-center">
        <h1 className="text-xl"><span className="font-semibold">Name: </span> {query.added_by.name}</h1>
        <div className="avatar">
  <div className="md:w-12 w-8 rounded-full ml-4 ring ring-blue-700  ring-offset-2">
    <img src={query.added_by.photo} />
  </div>
</div>
    </div>
</div>





          <h2 className=" font-extrabold text-gray-700"><span className="font-semibold">Recommendation Count: </span> {query.added_by.recommendation_count}</h2>

         


          <div className="card-actions justify-end mt-6">
           <Link to={`/querydetails/${query._id}`}> <button className="btn btn-outline border-blue-900 hover:bg-blue-700">Recommend</button></Link>
          </div>
        </div>


        


      </div>
    
    );
};

export default Query;