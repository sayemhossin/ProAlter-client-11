import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'


const Banner = () => {
    return (
        <div className="hero h-[50vh] md:min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Gdqknqh/banner.png)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">Explore Alternative  <span ><Typewriter words={[ 'Products for Informed Choices!'] } 
            loop={2}   typeSpeed={40} /></span> </h1>
            
           <Link to={'/queries'}> <button className="btn bg-blue-800 btn-primary">Go To All Queries <FaArrowRight/></button></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;