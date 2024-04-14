import useHooks from "../../hooks/useHooks";
import {Navigate, useLocation} from 'react-router-dom'


const PrivateRoute = ({children}) => {
    const {user} =useHooks()
    const location = useLocation()

    if(!user){
        return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;