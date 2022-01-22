const Dashboard = ({
	headerTitle,
	isOpenSort,
	items,
	selectedItem,
	sort,
	sortOptions,
	sortTitle,
	handleSelectItem,
	handleShowSortMenu,
	handleSelectOnChange,
}) => {
	return (
		<div class="dashboard">
			{headerTitle && <h4 className="dashboard__header">{headerTitle}</h4>}
		</div>
	);
};

export default Dashboard;
