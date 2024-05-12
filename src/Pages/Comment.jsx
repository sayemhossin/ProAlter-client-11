
const Comment = ({item}) => {
    return (
        <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-md dark:divide-gray-300 border-2 dark:text-gray-800">
        <div className="flex justify-between p-4">
            <div className="flex space-x-4">
               
                <div>
                    <h4 className="font-bold dark:text-gray-600 text-xl uppercase">{item.recommended_user_name}</h4>
                    <p className="text-xs dark:text-gray-600">{item.date}</p>
                </div>
            </div>
           
        </div>
        <div className="md:flex justify-around">
        <div className="p-4  space-y-2 text-sm dark:text-gray-600">
            <h1 className="text-xl font-semibold ">{item.recommended_title}</h1>
            <h1 className="text-xl">Product Name: <span className="font-semibold text-gray-500">{item.recommended_product_name}</span></h1>
            <p className="text-[16px] font-semibold">Recommendation reason:</p>
            <p className="md: lg:w-[800px]">{item.recommended_reason}</p>


        </div>
        <div className=" flex justify-center">
            <img className=" w-96 lg:w-48" src={item.recommended_product_photo} alt="" />
        </div>
        </div>
    </div>
    );
};

export default Comment;