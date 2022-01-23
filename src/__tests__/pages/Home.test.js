import { h } from "preact";
import { mount, shallow } from "enzyme";
import { SORT_OPTIONS } from "../../helpers/const";
import Home from "../../routes/pages/Home";
import initialData from "../../db/test-data.json";

describe("Test on Home", () => {
	const headerTitle = "Lottoland Games";
	const sortTitle = "Sort Games";
	let sort = "name";
	let isOpenSort = false;
	const items = [initialData];
	let selectedItem = null;
	const handleSelectItem = (value) => {
		selectedItem = value;
	};
	const handleShowSortMenu = () => {
		isOpenSort = !isOpenSort;
	};
	const handleSelectOnChange = (value) => {
		sort = value;
	};

	test("should match initial snapshot", () => {
		let wrapper = shallow(
			<Home
				headerTitle={headerTitle}
				isOpenSort={isOpenSort}
				items={items}
				selectedItem={selectedItem}
				sort={sort}
				sortOptions={SORT_OPTIONS}
				sortTitle={sortTitle}
				handleSelectItem={handleSelectItem}
				handleShowSortMenu={handleShowSortMenu}
				handleSelectOnChange={handleSelectOnChange}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("should have 1 div to wrap all contents of Home page", () => {
		let wrapper = mount(
			<Home
				headerTitle={headerTitle}
				isOpenSort={isOpenSort}
				items={items}
				selectedItem={selectedItem}
				sort={sort}
				sortOptions={SORT_OPTIONS}
				sortTitle={sortTitle}
				handleSelectItem={handleSelectItem}
				handleShowSortMenu={handleShowSortMenu}
				handleSelectOnChange={handleSelectOnChange}
			/>
		);
		expect(wrapper.find("div.home").length).toBe(1);
	});

	test("should have a maximum of 9 items shown on the list", () => {
		let wrapper = mount(
			<Home
				headerTitle={headerTitle}
				isOpenSort={isOpenSort}
				items={items}
				selectedItem={selectedItem}
				sort={sort}
				sortOptions={SORT_OPTIONS}
				sortTitle={sortTitle}
				handleSelectItem={handleSelectItem}
				handleShowSortMenu={handleShowSortMenu}
				handleSelectOnChange={handleSelectOnChange}
			/>
		);
		expect(wrapper.find("div.list-item").length).toBe(9);
	});

	test("should have a maximum of 9 items shown on the list", () => {
		const optionSelected = 1;
		let wrapper = mount(
			<Home
				headerTitle={headerTitle}
				isOpenSort={isOpenSort}
				items={items}
				selectedItem={selectedItem}
				sort={sort}
				sortOptions={SORT_OPTIONS}
				sortTitle={sortTitle}
				handleSelectItem={handleSelectItem}
				handleShowSortMenu={handleShowSortMenu}
				handleSelectOnChange={handleSelectOnChange}
			/>
		);

		//Extract the values of DisplayName for items rendered initially and compare them later
		let oldSortItems = [];
		wrapper
			.find("div.list-item")
			.find("h5")
			.forEach((heading) => {
				oldSortItems.push(heading.text());
			});

		//Extract the onChange for the 2nd input, as "name" is default sorting
		let onChange;
		let value;
		wrapper.find("input").forEach((input, id) => {
			if (id === optionSelected) {
				onChange = input.props().onChange;
				value = input.props().value;
			}
		});
		onChange({ target: { value: value } });

		//Forces a rerender of the component with the new value after onClick and trigger useEffect;
		wrapper.setProps({
			headerTitle: headerTitle,
			isOpenSort: isOpenSort,
			items: items,
			selectedItem: selectedItem,
			sort: value,
			sortOptions: SORT_OPTIONS,
			sortTitle: sortTitle,
			handleSelectItem: handleSelectItem,
			handleShowSortMenu: handleShowSortMenu,
			handleSelectOnChange: handleSelectOnChange,
		});
		wrapper.update();

		let newSortItems = [];
		wrapper
			.find("div.list-item")
			.find("h5")
			.forEach((heading) => {
				newSortItems.push(heading.text());
			});
		expect(oldSortItems.every((item, i) => item === newSortItems[i])).toBe(
			false
		);
	});
});
