import { useEffect, useState } from "preact/hooks";
import Dashboard from "../../components/templates/Dashboard";
import initialValues from "../../db/test-data.json";
import {
	MAX_GAMES_PER_PAGE,
	SORT_OPTIONS,
	SORT_OPTION_NAME,
} from "../../helpers/const";
import { getItemsToShow } from "../../helpers/helpers";

const Home = () => {
	const [isOpenSort, setIsOpenSort] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [sort, setSort] = useState(SORT_OPTION_NAME);
	const [items, setItems] = useState([]);

	useEffect(() => {
		const itemsToShow = getItemsToShow(
			sort,
			initialValues,
			0,
			MAX_GAMES_PER_PAGE
		);
		setItems(itemsToShow);
	}, [sort]);

	const handleShowSortMenu = () => {
		setIsOpenSort((state) => !state);
	};

	const handleSelectOnChange = (value) => {
		setSort(value);
		handleSelectItem(null);
	};

	const handleSelectItem = (value) => {
		setSelectedItem(value);
	};

	return (
		<div class="home">
			<Dashboard
				headerTitle="Lottoland Games"
				isOpenSort={isOpenSort}
				items={items}
				selectedItem={selectedItem}
				sort={sort}
				sortTitle="Sort Games"
				sortOptions={SORT_OPTIONS}
				selectedItem={selectedItem}
				handleSelectItem={handleSelectItem}
				handleShowSortMenu={handleShowSortMenu}
				handleSelectOnChange={handleSelectOnChange}
			/>
		</div>
	);
};

export default Home;
