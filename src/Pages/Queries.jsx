import { useEffect, useState } from "react";
import Query from "./Query";



const Queries = () => {


    const [queries,setQueries] = useState([])
    const [searchText,setSearchText] = useState('')
    const [search,setSearch] =useState('')

useEffect(()=>{
    fetch(`http://localhost:5000/allquerys?search=${search}`)
    .then(res => res.json())
            .then(data => {
               setQueries(data)
            })
},[search])

const handleSearch = e =>{
    e.preventDefault()
    setSearch(searchText)
}
const reset =() =>{
    setSearch('')
    setSearchText('')
}





    return (
        <div>
<form onSubmit={handleSearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                onChange={e => setSearchText(e.target.value)}
                                value={searchText}
                                placeholder='Enter Job Title'
                                aria-label='Enter Job Title'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>

<button onClick={reset} className="btn">reset</button>



         <div className="grid grid-cols-1 md:mx-20 md:grid-cols-2 lg:grid-cols-4 gap-5">
         {
            queries.map(query => <Query key={query._id} query={query}></Query>)
          }
         </div>
        </div>
    );
};

export default Queries;