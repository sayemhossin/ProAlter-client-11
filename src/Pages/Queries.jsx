import { useEffect, useState } from "react";
import Query from "./Query";

const Queries = () => {
    const [queries, setQueries] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [search, setSearch] = useState('');
    const [grid, setGrid] = useState(4); // Default grid value

    useEffect(() => {
        fetch(`http://localhost:5000/allquerys?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setQueries(data);
            });
    }, [search]);

    const handleSearch = e => {
        e.preventDefault();
        setSearch(searchText);
    };

    const reset = () => {
        setSearch('');
        setSearchText('');
        setGrid(4);
    };

    const toggleGrid = (value) => {
        setGrid(value);
    };

    return (
        <div>

<div>
    <h1 className="text-4xl font-bold text-center text-blue-800 mt-7">Explore All The Query Item </h1>
</div>




           <div className="md:flex px-2 justify-center gap-10  mt-12">
           <form onSubmit={handleSearch}>
                <div>
                    <input
                        className="input  rounded-r-none input-bordered input-accent  max-w-xs"
                        type='text'
                        name='search' 
                        
                        onChange={e => setSearchText(e.target.value)}
                        value={searchText}
                        placeholder='Search By Product Name'
                    />
                    <button className='px-1 h-[50px] rounded-l-none md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none'>
                        Search
                    </button>
                </div>
            </form>

           <div>
           <button onClick={reset} className="btn mt-6 md:mt-0 hover:bg-blue-600 btn-outline">Reset All</button>
           </div>
          <div>
          
            

            <details className="dropdown hidden lg:inline-block">
  <summary className=" btn hover:bg-blue-600 btn-outline">Change Layout</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><button onClick={() => toggleGrid(2)} className="btn bg-blue-500">2 Column</button></li>
    <li><button onClick={() => toggleGrid(4)} className="btn bg-blue-400 mt-5">4 Column</button></li>
  </ul>
</details>






          </div>
           </div>
<div className="divider mb-12"></div>
            <div className={`grid grid-cols-1 md:mx-20 md:grid-cols-2 lg:grid-cols-${grid} gap-5`}>
                {
                    queries.map(query => <Query key={query._id} query={query}></Query>)
                }
            </div>
        </div>
    );
};

export default Queries;
