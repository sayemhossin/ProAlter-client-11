import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";


const PrivateRoute = ({children}) => {
    const {loading,user} = useContext(AuthContext)
    const location = useLocation()
if(loading){
    return <div className="h-screen flex w-full justify-center items-center">
    <span className="loading  text-blue-500 loading-spinner loading-lg"></span>
        
        </div>

}

if(user){
    return children
}
return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;