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
            <form onSubmit={handleSearch}>
                <div>
                    <input
                        className="input input-bordered input-accent  max-w-xs"
                        type='text'
                        name='search'
                        onChange={e => setSearchText(e.target.value)}
                        value={searchText}
                        placeholder='Search By Product Name'
                    />
                    <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                        Search
                    </button>
                </div>
            </form>

            <button onClick={reset} className="btn">Reset</button>
            <button onClick={() => toggleGrid(2)} className="btn">Grid 2</button>
            <button onClick={() => toggleGrid(4)} className="btn">Grid 4</button>

            <div className={`grid grid-cols-1 md:mx-20 md:grid-cols-2 lg:grid-cols-${grid} gap-5`}>
                {
                    queries.map(query => <Query key={query._id} query={query}></Query>)
                }
            </div>
        </div>
    );
};

export default Queries;
