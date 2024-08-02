import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const authState = useSelector(state => state.auth);

    if (authState.user === null) {
        return <Navigate to="/signin?err=unauthrized" />;
    }
    console.log(authState.user);
    return <Outlet />;
};

export default ProtectedRoute;
