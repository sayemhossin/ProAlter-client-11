
const Comment = ({item}) => {
    return (
        <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between p-4">
            <div className="flex space-x-4">
               
                <div>
                    <h4 className="font-bold">{item.recommended_user_name}</h4>
                    <p className="text-xs dark:text-gray-600">{item.date}</p>
                </div>
            </div>
           
        </div>
        <div className="flex justify-between">
        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <h1>{item.recommended_title}</h1>
            <h1>{item.recommended_product_name}</h1>
            <p>{item.recommended_reason}</p>


        </div>
        <div>
            <img className="w-40" src={item.recommended_product_photo} alt="" />
        </div>
        </div>
    </div>
    );
};

export default Comment;