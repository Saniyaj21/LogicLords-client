import { useSelector } from "react-redux";
import { selectUser } from "./redux/slices/authSlice";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const { isAuthenticated, user } = useSelector(selectUser);
	console.log(isAuthenticated, user);

	return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
