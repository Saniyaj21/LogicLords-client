import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/authSlice";

const CheckAuth = ({ children }) => {
	const { isAuthenticated } = useSelector(selectUser);
	if (isAuthenticated) {
		return <>{children.authenticated}</>;
	} else {
		return <>{children.unauthenticated}</>;
	}
};

export default CheckAuth;
