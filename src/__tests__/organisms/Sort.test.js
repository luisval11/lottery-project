import { h } from "preact";
import { mount, shallow } from "enzyme";
import { SORT_OPTIONS } from "../../helpers/const";
import { Sort } from "../../components/organisms/Sort";

describe("Test on Sort", () => {
	const sortTitle = "Sort Title";
	let sort = "name";
	let isOpenSort = false;
	const handleShowSortMenu = () => {
		isOpenSort = !isOpenSort;
	};
	const handleSelectOnChange = (value) => {
		sort = value;
	};

	test("should match initial snapshot", () => {
		let wrapper = shallow(
			<Sort
				title={sortTitle}
				sortOptions={SORT_OPTIONS}
				sortValue={sort}
				isOpenSort={isOpenSort}
				handleOpenSort={handleShowSortMenu}
				handleSelectOnChange={handleSelectOnChange}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("should 2 main divs, according to designs to Figma (div when menu is closed and div when is open)", () => {
		let wrapper = mount(
			<Sort
				title={sortTitle}
				sortOptions={SORT_OPTIONS}
				sortValue={sort}
				isOpenSort={isOpenSort}
				handleOpenSort={handleShowSortMenu}
				handleSelectOnChange={handleSelectOnChange}
			/>
		);
		expect(wrapper.find("div.sort__wrapper-select").length).toBe(1);
		expect(wrapper.find("div.sort__wrapper-select--hidden").length).toBe(1);
	});

	test("should have the text 'Sort Title'", () => {
		let wrapper = mount(
			<Sort
				title={sortTitle}
				sortOptions={SORT_OPTIONS}
				sortValue={sort}
				isOpenSort={isOpenSort}
				handleOpenSort={handleShowSortMenu}
				handleSelectOnChange={handleSelectOnChange}
			/>
		);
		expect(wrapper.find("span.sort__select").at(0).text()).toBe(sortTitle);
	});

	test("should have the image of 'chevron-down' to collapse or expand the menu", () => {
		let wrapper = mount(
			<Sort
				title={sortTitle}
				sortOptions={SORT_OPTIONS}
				sortValue={sort}
				isOpenSort={isOpenSort}
				handleOpenSort={handleShowSortMenu}
				handleSelectOnChange={handleSelectOnChange}
			/>
		);
		expect(wrapper.find("img.sort__select-image").length).toBe(1);
	});

	test("should have the menu of sorting collapsed when it's isOpenSort is closed", () => {
		let wrapper = mount(
			<Sort
				title={sortTitle}
				sortOptions={SORT_OPTIONS}
				sortValue={sort}
				isOpenSort={isOpenSort}
				handleOpenSort={handleShowSortMenu}
				handleSelectOnChange={handleSelectOnChange}
			/>
		);
		expect(wrapper.find("div.sort__wrapper-select--hidden").length).toBe(1);
	});

	test("if 2nd main div is hidden, when 1st main div is clicked, then hides the 1st one and 2nd main div is shown", () => {
		let wrapper = mount(
			<Sort
				title={sortTitle}
				sortOptions={SORT_OPTIONS}
				sortValue={sort}
				isOpenSort={isOpenSort}
				handleOpenSort={handleShowSortMenu}
				handleSelectOnChange={handleSelectOnChange}
			/>
		);

		//Extract the onClick for the div input
		const { onClick } = wrapper.find("span.sort__select").at(0).props();
		onClick();

		//Forces a rerender of the component with the new value after onClick;
		wrapper.setProps({
			title: sortTitle,
			sortOptions: SORT_OPTIONS,
			sortValue: sort,
			isOpenSort: isOpenSort,
			handleOpenSort: handleShowSortMenu,
			handleSelectOnChange: handleSelectOnChange,
		});
		wrapper.update();
		expect(wrapper.find("span.sort__select--open").length).toBe(1);
	});
});
