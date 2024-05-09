import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
const Root = () => {
    return (
        <div>
           <div className="shadow-lg h-20 fixed w-full z-50">
           <Navbar></Navbar>
           </div>
           <div className="pt-20">
           <Outlet></Outlet>
           <ToastContainer />
           </div>
        </div>
    );
};

export default Root;