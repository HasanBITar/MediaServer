import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from './authSlice';


const ProtectedRoute = () => {
    const authState = useSelector(state => state.auth);

    if (authState.user === null) {
        return <Navigate to="/signin?err=unauthrized" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
