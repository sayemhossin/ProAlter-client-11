import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { toast } from "react-toastify";

const UpdateQuery = () => {

    const { user } = useContext(AuthContext)

    const item = useLoaderData()




    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;

        const product = form.product.value
        const brand = form.brand.value
        const photo = form.photo.value
        const title = form.title.value
        const boycott_reason = form.boycott.value
        const updateData = {
            product,
            brand,
            photo,
            title,
            boycott_reason
        }


        fetch(`https://assignment-11-server-pi-six.vercel.app/allquery/${item._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Updated Successfully')
                }
            })

    }




    return (
        <div style={{
            backgroundImage: 'url(https://i.ibb.co/4pvDf9B/1471872-popular-dark-blue-and-white-wallpaper-1920x1080.jpg)',
            backgroundSize: 'cover',


        }} >
            <h1 className="text-3xl md:text-5xl pt-4 underline text-blue-200 font-extrabold text-center">Update Query Item</h1>
            <form onSubmit={handleUpdate} className="p-6 md:p-10 text-blue-300">
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <h1 className="text-2xl font-bold">Product Name:</h1>
                        <input className="w-full text-black font-semibold text-xl h-16 bg-white rounded-xl p-4" type="text" defaultValue={item.product} name="product" id="" placeholder="Product Name" required />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Product Brand:</h1>
                        <input className="w-full text-black font-semibold text-xl h-16 bg-white rounded-xl p-4" defaultValue={item.brand} type="text" name="brand" id="" placeholder="Brand" required />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Query Title:</h1>
                        <input className="w-full text-black font-semibold text-xl h-16 bg-white rounded-xl p-4" defaultValue={item.title} type="text" name="title" id="" placeholder="Title" required />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold">Image Url:</h1>
                        <input className="w-full text-black font-semibold text-xl h-16 bg-white rounded-xl p-4" type="text" defaultValue={item.photo} name="photo" id="" placeholder="Image Url" required />
                    </div>


                    <div>
                        <h1 className="text-2xl font-bold">User Email</h1>
                        <input className="w-full text-black font-semibold text-xl h-16 bg-white rounded-xl p-4" type="text" defaultValue={user?.email} name="email" id="" placeholder="Email" readOnly />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Boycott Reason:</h1>
                        <input className="w-full text-black font-semibold text-xl h-16 bg-white rounded-xl p-4" type="text" defaultValue={item.
                            boycott_reason} name="boycott" id="" placeholder="Details" required />
                    </div>

                </div>

                <input className="btn w-full text-xl text-[#240A34] font-extrabold  md:text-4xl bg-blue-500 mt-5  " type="submit" value="Update Query" />

            </form>

        </div>
    );
};

export default UpdateQuery;