import { List } from "../organisms/List";

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
			<div className="dashboard__rectangle" />
			<List
				className="dashboard__list"
				items={items}
				selectedItem={selectedItem}
				handleSelectItem={handleSelectItem}
			/>
		</div>
	);
};

export default Dashboard;
