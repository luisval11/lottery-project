import { h } from "preact";
import { mount, shallow } from "enzyme";
import { EXAMPLE_LISTITEM, SORT_OPTIONS } from "../../helpers/const";
import Dashboard from "../../components/templates/Dashboard";

describe("Test on Dashboard", () => {
	const headerTitle = "Header Title";
	const sortTitle = "Sort Title";
	let sort = "name";
	let isOpenSort = false;
	const items = [EXAMPLE_LISTITEM.LuckyWizard, EXAMPLE_LISTITEM.GreekGods];
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
			<Dashboard
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

	test("should have a heading for the Dashboard", () => {
		let wrapper = mount(
			<Dashboard
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
		expect(wrapper.find("h4.dashboard__header").text()).toBe(headerTitle);
	});

	test("should have 1 Sort menu to sort the items on the List organism", () => {
		let wrapper = mount(
			<Dashboard
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
		expect(wrapper.find("div.sort__wrapper-select").length).toBe(1);
	});

	test("should have a separator to separate Sort organism and List organism", () => {
		let wrapper = mount(
			<Dashboard
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
		expect(wrapper.find("div.dashboard__rectangle").length).toBe(1);
	});

	test("should have 1 List organism to show the List of items according to the items received", () => {
		let wrapper = mount(
			<Dashboard
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
		expect(wrapper.find("div.dashboard__list").length).toBe(1);
	});

	test("if first 'sort' option is selected by default, when a different option is clicked, then first listItem is not 'selected' any more", () => {
		const optionSelected = 1;
		let wrapper = mount(
			<Dashboard
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

		//Forces a rerender of the component with the new value after onClick;
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

		//Extract the onClick for the div input
		const { sort: sortProp } = wrapper.props();
		expect(sortProp).toBe(SORT_OPTIONS[optionSelected].name);
	});
});
