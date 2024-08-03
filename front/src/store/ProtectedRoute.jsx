import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AUTH_STATUS } from './authSlice';
import LoadingPage from '../pages/LoadingPage';

const ProtectedRoute = () => {
    const authState = useSelector(state => state.auth);

    if (authState.state === AUTH_STATUS.loading) {
        return <LoadingPage />;
    }

    else if (authState.user === null) {
        return <Navigate to="/signin?err=unauthrized" />;
    }
    console.log(authState.user);
    return <Outlet />;
};

export default ProtectedRoute;
