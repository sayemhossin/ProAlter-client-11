import PropTypes from 'prop-types';
const RecentQuery = ({ query }) => {
    return (
        <div className="card flex   border-2 border-blue-300 bg-blue-100 p-6  ">
            
        <div className=" flex h-full justify-center  ">
        <img data-aos="zoom-in-up" className="" src={query.photo} alt="photo" />

        </div>




        <div className="card-body p-6 flex-grow ">
            
          <h2 data-aos="fade-up-right" className="card-title">{query.title}</h2>
          <h2 className=""> <span className="font-semibold">Product Name: </span>{query.product}</h2>
          <h2 className=""><span className="font-semibold">Brand Name</span> {query.brand}</h2>
          <h2 data-aos="fade-up-left" className=""> <span className="font-semibold text-red-500">Alternation Reason: </span> {query.boycott_reason}</h2>
          <h2 className="text-green-500 font-semibold"><span className="font-semibold text-gray-800">Posted Date:</span> {query.added_by.date}</h2>




                <div>
    <h1 className="text-center font-bold underline mt-3">Query Added by</h1>
    <div data-aos="flip-left" className="flex justify-around items-center">
        <h1 className="text-xl"><span className="font-semibold">Name: </span> {query.added_by.name}</h1>
        <div className="avatar">
  <div className="md:w-12 w-8 rounded-full ml-4 ring ring-blue-700  ring-offset-2">
    <img src={query.added_by.photo} />
  </div>
</div>
    </div>
</div>

            </div>
        </div>
    );
};



RecentQuery.propTypes ={
    query:PropTypes.object
  }
  


export default RecentQuery;