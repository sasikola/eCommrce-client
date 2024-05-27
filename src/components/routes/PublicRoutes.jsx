import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {userInfo !== null ? (
        <Navigate to="/" state={{ from: location }} replace />
      ) : (
        children
      )}
    </>
  );
};

PublicRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoutes;
