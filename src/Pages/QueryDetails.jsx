import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QueryDetails = () => {
    const { id } = useParams()
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);



    useEffect(() => {
        fetch('http://localhost:5000/allquery')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            });
    }, []);


    useEffect(() => {
        const selectedItem = items.find(i => i._id === id);
        if (selectedItem) {
            setItem(selectedItem);
        }
    }, [id, items]);



    return (
        <div>
            {
                item ? <div>
                    <div className="card  bg-base-100 shadow-xl">
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
                                    <p className="">Recommendation Count: {item.added_by.recommendation_count}</p>
                                </div>
                            </div>


                            <div className="flex-1 text-center">
                                <h1 className="text-center text-xl font-semibold underline mb-9">Product Added By</h1>


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

<div>
    
</div>








                </div> : <div>Loading</div>
            }
        </div>
    );
};








export default QueryDetails;