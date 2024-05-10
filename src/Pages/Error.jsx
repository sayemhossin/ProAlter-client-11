import { Link } from 'react-router-dom';
import err from '../assets/image/error.png'
import { FaArrowLeft } from 'react-icons/fa';

const Error = () => {
    return (
        <div className=' justify-center flex items-center h-screen '>
           <div>
           <div>
                <img src={err} alt="" />
            </div>
            <div className="text-center">
                <Link to={'/'}><button className='btn btn-outline border-blue-700 hover:bg-blue-700 text-xl text-blue-800'><FaArrowLeft></FaArrowLeft> Go Back</button></Link>
            </div>
           </div>
        </div>
    );
};

export default Error;