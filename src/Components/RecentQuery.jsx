
const RecentQuery = ({ query }) => {
    return (
        <div className="  p-6 rounded-md  shadow-md dark:bg-blue-100 dark:text-gray-900">
            <img src={query.photo} alt="" className=" object-fill w-full rounded-md h-72 dark:bg-gray-500" />

            <div className="space-y-4 mt-4">
                <h2 className="card-title">{query.title}</h2>
                <h2 className=""> <span className="font-semibold">Product Name: </span>{query.product}</h2>
                <h2 className=""><span className="font-semibold">Brand Name</span> {query.brand}</h2>
                <h2> <span className="font-semibold text-red-500">Alternation Reason: </span> {query.boycott_reason}</h2>
                <h2 className="text-green-500 font-semibold"><span className="font-semibold text-gray-800">Posted Date:</span> {query.added_by.date}</h2>

                <div >
                    <h1 className="text-center font-bold underline mt-3">Query Added by</h1>
                    <div className="flex  justify-around items-center">
                        <h1 className="text-xl"><span className="font-semibold">Name: </span> {query.added_by.name}</h1>
                        <div className="avatar">
                            <div className="md:w-16 w-10 rounded-full ml-4 ring ring-blue-700  ring-offset-2">
                                <img src={query.added_by.photo} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecentQuery;