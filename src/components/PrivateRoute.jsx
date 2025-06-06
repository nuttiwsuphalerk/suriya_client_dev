import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { history } from '../helpers';

export { PrivateRoute };

function PrivateRoute({ children }) {
    const { user: authUser } = useSelector(x => x.auth);
    
    if (!authUser) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" state={{ from: history.location }} />
    }

    // authorized so return child components
    return children;
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
};