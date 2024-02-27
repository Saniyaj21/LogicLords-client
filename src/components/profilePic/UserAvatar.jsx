import defaultAvatar from "../../media/default_profile.png";

const UserAvatar = ({ user }) => {
	if (user) {
		if (user.isGoogleLogin === false && user.avatar?.url) {
			return <img src={user.avatar.url} alt={user.name} />;
		} else if (user.isGoogleLogin === true) {
			return <img src={user.googleAvatar} alt={user.name} />;
		}
	}

	return <img src={defaultAvatar} alt='profile Picture' />;
};

export default UserAvatar;
