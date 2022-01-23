import { h } from "preact";
import { mount, shallow } from "enzyme";
import { List } from "../../components/organisms/List";
import { EXAMPLE_LISTITEM } from "../../helpers/const";

describe("Test on List", () => {
	const items = [EXAMPLE_LISTITEM.LuckyWizard, EXAMPLE_LISTITEM.LuckyWizard];
	let selectedItem = null;
	const handleSelectItem = (value) => {
		selectedItem = value;
	};

	test("should match initial snapshot", () => {
		let wrapper = shallow(
			<List
				className="dashboard__list"
				items={items}
				selectedItem={selectedItem}
				handleSelectItem={handleSelectItem}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("should 2 items, according to the number of items passed", () => {
		const countItems = 2;
		let wrapper = mount(
			<List
				className="dashboard__list"
				items={items}
				selectedItem={selectedItem}
				handleSelectItem={handleSelectItem}
			/>
		);
		expect(wrapper.find("div.list-item__wrapper-rectangle").length).toBe(
			countItems
		);
	});

	test("if first 'listItem' is selected, when a different listItem is clicked, then first listItem is not 'selected' any more", () => {
		const secondListItemId = 1;
		let wrapper = mount(
			<List
				className="dashboard__list"
				items={items}
				selectedItem={selectedItem}
				handleSelectItem={handleSelectItem}
			/>
		);

		//Extract the onClick for the div input
		const { onClick } = wrapper
			.find("div.list-item")
			.at(secondListItemId)
			.props();
		onClick(secondListItemId);

		//Forces a rerender of the component with the new value after onClick;
		wrapper.setProps({
			className: "dashboard__list",
			items: items,
			selectedItem: secondListItemId,
			handleSelectItem: handleSelectItem,
		});
		wrapper.update();
		expect(wrapper.find("div.list-item--selected").length).toBe(1);
		expect(wrapper.find("div.list-item").length).toBe(1);
		expect(wrapper.props().selectedItem).toBe(secondListItemId);
	});
});
