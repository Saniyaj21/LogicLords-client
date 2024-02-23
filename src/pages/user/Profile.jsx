import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/authSlice";

const Profile = () => {
    const { isAuthenticated , user} = useSelector(selectUser);

  return (
    <div>{user?.name}</div>
  )
}

export default Profile