import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import MyRecommendation from "./MyRecommendation";

const MyRecommendations = () => {

    const { user } = useContext(AuthContext);
    const [recommendations, setMyRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);





    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/myrecommendetion/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyRecommendations(data);
                setLoading(false);
            });
    }, [user]);


    const handleDelete = (Id) => {
        setMyRecommendations(prev => prev.filter(query => query._id !== Id));
    };








    return (
        <div style={{
            backgroundImage: 'url(https://i.ibb.co/WssmtV1/blue-galaxy-background-8azr9zrvss19uli4.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',

        }}>
            <div>
                <h2 className="text-2xl md:text-5xl pt-8 pb-8 text-blue-400 underline text-center font-extrabold">My recommendations</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="overflow-x-auto text-white h-[50vh] md:h-[80vh]">
                        <table className="table text-gray-300 font-bold  lg:text-2xl">
                            {/* head */}
                            <thead>
                                <tr className="font-bold text-white  lg:text-2xl">
                                    <th>No</th>
                                    <th>Query product Name</th>
                                    <th> Recommended Product</th>
                                    <th>Added Date</th>
                                    <th>Remove Now</th>
                                </tr>
                            </thead>
                            <tbody className="">

                                {
                                    recommendations.map((item, idx) => <MyRecommendation
                                        key={item._id}
                                        onDelete={handleDelete}
                                        idx={idx}
                                        item={item}
                                    ></MyRecommendation>)
                                }

                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyRecommendations;