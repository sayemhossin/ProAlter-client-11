import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";


const PrivateRoute = ({children}) => {
    const {loading,user} = useContext(AuthContext)
    const location = useLocation()
if(loading){
    return <p>Loading</p>

}

if(user){
    return children
}
return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;