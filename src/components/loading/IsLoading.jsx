
const IsLoading = ({loading, children}) => {
	if (loading === 'loading') {
		return <>{children.onLoading}</>;
	} else {
		return <>{children.notLoading}</>;
	}
};

export default IsLoading;
