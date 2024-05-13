import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyQuery = ({ query ,onDelete}) => {


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allquery/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                     
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your query has been deleted.",
                                icon: "success"
                            });
                            onDelete(id)

                        }
                    })
            }
        });

    }





    return (
        <div className=" lg:mx-40  py-4  border-2 rounded-xl">
            <div className="flex lg:gap-28 flex-col lg:flex-row">
             
               <img src={query.photo} className="lg:w-[400px] md:max-w-sm md:mx-auto lg:mx-5 mt-3 rounded-lg " />
            
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold">{query.product}</h1>
                        <h1 className="text-xl md:text-3xl mt-4 font-semibold">Brand: {query.brand}</h1>
                        <p className="py-6 text-xl font-semibold">Title: <span className="text-blue-600">{query.title}</span></p>
                        <h2 className="text-green-500 font-semibold"><span className="font-semibold  text-black">Posted Date:</span> {query.added_by.date}</h2>



                        <div className="flex items-center justify-around mt-8">
                            <Link to={`/querydetails/${query._id}`}> <button className="btn bg-blue-600 hover:bg-blue-800 text-xl text-blue-50">View Details</button></Link>
                            <div className="space-x-7">
                                <Link to={`/queryupdate/${query._id}`}> <button className="tooltip text-xl " data-tip="Update"><FaUserEdit /></button></Link>
                                <button onClick={() => handleDelete(query._id)} className="tooltip text-xl " data-tip="Delete"><FaTrashAlt /></button>
                            </div>
                        </div>





                    </div>
                </div>


            </div>

        </div>

    );
};


















export default MyQuery;