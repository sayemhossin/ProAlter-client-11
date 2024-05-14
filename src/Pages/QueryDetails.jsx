import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { toast } from "react-toastify";
import Comment from "./Comment";

const QueryDetails = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [item, setItem] = useState(null);
    const [items, setItems] = useState(null);
    const [loadingComments, setLoadingComments] = useState(true);



    useEffect(() => {
        fetch(`https://assignment-11-server-pi-six.vercel.app/allquery/${id}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setItem(data);
            });

    }, [id]);


    useEffect(() => {
        setLoadingComments(true)
        fetch(`https://assignment-11-server-pi-six.vercel.app/recommendations/${id}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoadingComments(false)
            });
    }, [id]);








    let ms = Date.now()
    const currentDate = new Date(ms);
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    // console.log(`Current date: ${day}/${month}/${year}`);




    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target

        const recommended_title = form.title.value
        const recommended_product_name = form.productname.value
        const recommended_product_photo = form.productphoto.value
        const recommended_reason = form.reason.value
        const query_id = item._id
        const query_title = item.title
        const query_product_name = item.product
        const query_adder_email = item.added_by.email
        const query_adder_name = item.added_by.name
        const recommended_user_email = user?.email
        const recommended_user_name = user?.displayName
        const date = `${day}/${month}/${year}`


        const allinfo = {
            recommended_title,
            recommended_product_name,
            recommended_product_photo,
            recommended_reason,
            query_id,
            query_title,
            query_product_name,
            query_adder_email,
            query_adder_name,
            recommended_user_email,
            recommended_user_name,
            date
        }

        fetch('https://assignment-11-server-pi-six.vercel.app/recommendation', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(allinfo)
        })
            .then(res => res.json())
            .then(data => {
                // Update UI state with newly added comment
                setItems(prevItems => [...prevItems, data]);
                setItem(prevItem => ({
                    ...prevItem,
                    added_by: {
                        ...prevItem.added_by,
                        recommendation_count: prevItem.added_by.recommendation_count + 1
                    }
                }));


                toast.success('Added Successfully');
                form.reset();


                fetch(`https://assignment-11-server-pi-six.vercel.app/recommendations/${id}`, { credentials: 'include' })
                    .then(res => res.json())
                    .then(updatedData => {

                        setItems(updatedData);
                    })
                    .catch(error => {
                        console.error('Error fetching updated comments:', error);
                    });
            })
            .catch(error => {
                console.error('Error adding recommendation:', error);
                toast.error('Failed to add recommendation');
            });
    };






    return (
        <div className="mb-12">
            {
                item ? <div className="" >
                    <div className="lg:shadow-xl pb-10 lg:p-10 lg:m-10 rounded-xl bg-gray-100">
                        <div className="card">
                            <figure>
                                <img src={item.photo} className="w-[700px]" alt="photo" /></figure>
                            <h1 className="text-4xl text-center mt-6 font-bold">{item.title} </h1>
                            <div className="flex mt-4 md:flex-row flex-col">

                                <div className="card-body md:space-y-4 md:px-20 flex-1 border-r-2">



                                    <h1 className="text-3xl font-bold ">Brand: {item.brand}</h1>
                                    <p className="text-xl font-semibold"> Name:{item.product}</p>
                                    <p className="font-semibold">Alternation Reason: {item.boycott_reason}</p>
                                    <div className="flex">
                                        <p className="">Posted Date:{item.added_by.date}</p>
                                        <p className="">Recommendation Count: <span className="font-bold">{item.added_by.recommendation_count}</span></p>
                                    </div>
                                </div>


                                <div className="flex-1 text-center">
                                    <h1 className="text-center text-xl font-semibold underline mb-9">Query Added By</h1>


                                    <div>
                                        <div className="avatar">
                                            <div className="w-28 rounded">
                                                <img src={item.added_by.photo} />
                                            </div>
                                        </div>


                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold">Name:{item.added_by.name}</h2>
                                        <span className="text-sm dark:text-gray-600">Email: {item.added_by.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* recommendation Form */}

                        <div className=" lg:shadow-xs md:p-6 lg:rounded-xl bg-gray-200">
                            <h2 className="text-3xl font-bold underline text-center mb-6 pt-8 lg:pt-0 mt-8">Add Recommendation</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 mx-10 lg:mx-52 gap-10 ">
                                    <div>
                                        <label className="text-xl lg:text-2xl font-bold text-gray-600">Recommendation Title:</label><br />
                                        <input className="bg-gray-100 p-4 text-black font-semibold w-full h-14 rounded-lg" type="text" id="title" name="title" required />
                                    </div>

                                    <div>
                                        <label className="text-xl lg:text-2xl font-bold text-gray-600">Recommended Product Name:</label><br />
                                        <input className="bg-gray-100 p-4 text-black font-semibold w-full h-14 rounded-lg" type="text" id="productName" name="productname" required />
                                    </div>

                                    <div>
                                        <label className="text-xl lg:text-2xl font-bold text-gray-600">Recommended Product Image:</label><br />
                                        <input className="bg-gray-100 p-4 text-black font-semibold w-full h-14 rounded-lg" type="text" id="productImage" name="productphoto" required />
                                    </div>

                                    <div>
                                        <label className="text-xl lg:text-2xl font-bold text-gray-600">Recommendation Reason:</label><br />
                                        <textarea className="bg-gray-100 p-4 text-black font-semibold w-full h-14 rounded-lg" id="reason" name="reason" required></textarea>
                                    </div>

                                </div>
                                <div className="text-end mr-[15%]">
                                    <input className="text-center btn hover:bg-blue-600 btn-outline mt-9" type="submit" value="Add Recommendation" />
                                </div>
                            </form>
                        </div>

                    </div>
                    {/* comment section */}

                    {loadingComments ? (
                        <div className="h-screen flex w-full justify-center items-center">
                            <span className="loading  text-blue-500 loading-spinner loading-lg"></span>

                        </div>
                    ) : (
                        <div>
                            <div className="text-center md:mb-20 mb-10">
                                <h1 className="text-xl mt-10 md:text-4xl md:mt-20   font-bold text-blue-900">This Queries Recommendation Are Hare</h1>

                            </div>
                            <div className="grid gap-6">
                                {items.map((item, idx) => <Comment key={idx} item={item}></Comment>)}


                            </div>
                        </div>
                    )}


                </div> : <div className="h-screen flex w-full justify-center items-center">
                    <span className="loading  text-blue-500 loading-spinner loading-lg"></span>

                </div>
            }
        </div>
    );
};








export default QueryDetails;