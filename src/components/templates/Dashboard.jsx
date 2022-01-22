import { List } from "../organisms/List";
import { Sort } from "../organisms/Sort";

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
			<Sort
				title={sortTitle}
				sortOptions={sortOptions}
				sortValue={sort}
				isOpenSort={isOpenSort}
				handleOpenSort={handleShowSortMenu}
				handleSelectOnChange={handleSelectOnChange}
			/>
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
