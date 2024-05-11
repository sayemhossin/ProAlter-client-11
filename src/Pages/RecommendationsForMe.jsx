import { useEffect, useState } from "react";

const RecommendationsForMe = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/recommendation')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.ibb.co/xM1BWfp/brand-20collaboration-20examples.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: 'transparent'
        }}>

     
             <div className="overflow-x-auto text-white h-[70vh] md:h-[80vh]">
                        <table className="table text-gray-300 font-bold  lg:text-2xl">
                    {/* head */}
                    <thead>
                    <tr className="font-bold bg-blue-400 text-gray-900  lg::text-2xl">
                            <th>No</th>
                            <th>Query product Name</th>
                            <th> Recommended Product</th>
                            
                            <th>Recommender name</th>
                            <th>Recommender Email</th>
                            <th>Added Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, idx) => (
                                <tr key={item._id} className="hover:bg-blue-500">
                                    <th>{idx + 1}</th>
                                    <td>{item.query_product_name}</td>
                                    <td>{item.recommended_product_name}</td>
                                    <td>{item.recommended_user_name}</td>
                                    <td>{item.recommended_user_email}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecommendationsForMe;
