import { h } from "preact";
import { mount, shallow } from "enzyme";
import { ListItem } from "../../components/molecules/ListItem";
import { EXAMPLE_LISTITEM } from "../../helpers/const";

describe("Test on ListItem", () => {
	let id = 0;
	const item = EXAMPLE_LISTITEM.LuckyWizard;
	let selectedItem = null;
	const handleSelectItem = (value) => {
		selectedItem = value;
	};

	test("should match initial snapshot", () => {
		let wrapper = shallow(
			<ListItem
				key={id}
				id={id}
				item={item}
				handleSelectItem={handleSelectItem}
				selectedItem={selectedItem}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("should have 2 img, according to designs to Figma (image of item and info icon)", () => {
		const countImage = 2;
		let wrapper = mount(
			<ListItem
				key={id}
				id={id}
				item={item}
				handleSelectItem={handleSelectItem}
				selectedItem={selectedItem}
			/>
		);
		expect(wrapper.find("img").length).toBe(countImage);
	});

	test("should have 1 LinkA, according to designs to Figma (wrapper of button to go the external item)", () => {
		const countLinkA = 1;
		let wrapper = mount(
			<ListItem
				key={id}
				id={id}
				item={item}
				handleSelectItem={handleSelectItem}
				selectedItem={selectedItem}
			/>
		);
		expect(wrapper.find("a").length).toBe(countLinkA);
	});

	test("should have 2 Label, according to designs to Figma (provider of the item and minimum stake in EUR currency)", () => {
		const countLabel = 2;
		let wrapper = mount(
			<ListItem
				key={id}
				id={id}
				item={item}
				handleSelectItem={handleSelectItem}
				selectedItem={selectedItem}
			/>
		);
		expect(wrapper.find("label").length).toBe(countLabel);
	});

	test("should have 1 Button, according to designs to Figma (button to go the external item)", () => {
		const countButton = 1;
		let wrapper = mount(
			<ListItem
				key={id}
				id={id}
				item={item}
				handleSelectItem={handleSelectItem}
				selectedItem={selectedItem}
			/>
		);
		expect(wrapper.find("button").length).toBe(countButton);
	});

	test("should have 1 h5, according to designs to Figma (heading for displayName of item)", () => {
		const countHeading = 1;
		let wrapper = mount(
			<ListItem
				key={id}
				id={id}
				item={item}
				handleSelectItem={handleSelectItem}
				selectedItem={selectedItem}
			/>
		);
		expect(wrapper.find("h5").length).toBe(countHeading);
	});

	test("className should change to 'selected' when clicks on the listItem", () => {
		let wrapper = mount(
			<ListItem
				key={id}
				id={id}
				item={item}
				handleSelectItem={handleSelectItem}
				selectedItem={selectedItem}
			/>
		);

		//Extract the onClick for the div input
		const { onClick } = wrapper.find("div.list-item").props();
		onClick(id);

		//Forces a rerender of the component with the new value after onClick;
		wrapper.setProps({
			key: id,
			id: id,
			item: item,
			handleSelectItem: handleSelectItem,
			selectedItem: id,
		});
		wrapper.update();

		expect(wrapper.find("div.list-item--selected").length).toBe(1);
		expect(wrapper.find("div.list-item").length).toBe(0);
	});
});
