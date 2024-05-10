import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyQuery = ({query}) => {
    return (
        <div className=" lg:mx-40  py-4  border-2 rounded-xl">
<div className="flex lg:gap-28 flex-col lg:flex-row">
  <img src={query.photo} className="lg:max-w-sm mx-5 mt-3 rounded-lg " />
  <div className="hero-content flex-col lg:flex-row">
    <div>
      <h1 className="text-3xl md:text-5xl font-bold">{query.product}</h1>
      <h1 className="text-xl md:text-3xl font-bold">Brand: {query.brand}</h1>
      <p className="py-6 text-xl font-semibold">Title: {query.title}</p>
      <p>Added Date: {query.added_by.date}</p>
     <Link to={`/querydetails/${query._id}`}> <button className="btn btn-primary">Details</button></Link>


     <Link to={`/queryupdate/${query._id}`}> <button className=" "><FaUserEdit/></button></Link>

    </div>
  </div>

             
  </div>
  
</div>

    );
};


















export default MyQuery;