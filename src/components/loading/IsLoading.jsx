
const IsLoading = ({loading, children}) => {
	if (loading) {
		return <>{children.onLoading}</>;
	} else {
		return <>{children.notLoading}</>;
	}
};

export default IsLoading;
