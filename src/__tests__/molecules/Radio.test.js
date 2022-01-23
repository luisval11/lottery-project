import { h } from "preact";
import { mount, shallow } from "enzyme";
import { Radio } from "../../components/molecules/Radio";
import { SORT_OPTIONS } from "../../helpers/const";

describe("Test on Radio", () => {
	test("should match initial snapshot", () => {
		let state = "name";
		const handleSelectOnChange = (value) => {
			state = value;
		};
		let wrapper = shallow(
			<Radio
				options={SORT_OPTIONS}
				value={state}
				onChange={handleSelectOnChange}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("should have 3 labels, according to const SORT_OPTIONS value", () => {
		let state = "name";
		const handleSelectOnChange = (value) => {
			state = value;
		};
		let wrapper = mount(
			<Radio
				options={SORT_OPTIONS}
				value={state}
				onChange={handleSelectOnChange}
			/>
		);
		expect(wrapper.find("label").length).toBe(SORT_OPTIONS.length);
		wrapper.find("label").forEach((label, index) => {
			const value = label.text().trim();
			expect(value).toBe(SORT_OPTIONS[index].text);
		});
	});

	test("should have 3 inputs, according to const SORT_OPTIONS value", () => {
		let state = "name";
		const handleSelectOnChange = (value) => {
			state = value;
		};
		let wrapper = mount(
			<Radio
				options={SORT_OPTIONS}
				value={state}
				onChange={handleSelectOnChange}
			/>
		);
		expect(wrapper.find("input").length).toBe(SORT_OPTIONS.length);
		wrapper.find("input").forEach((input, index) => {
			const { value } = input.props();
			expect(value).toBe(SORT_OPTIONS[index].name);
		});
	});

	test("should change value when changes to option 1 value", () => {
		let state = "name";
		let option = 1;
		const handleSelectOnChange = (value) => {
			state = value;
		};
		let wrapper = mount(
			<Radio
				options={SORT_OPTIONS}
				value={state}
				onChange={handleSelectOnChange}
			/>
		);

		//Extract the onChange for the 2nd input
		let onChange;
		let value;
		wrapper.find("input").forEach((input, id) => {
			if (id === option) {
				onChange = input.props().onChange;
				value = input.props().value;
			}
		});
		onChange({ target: { value: value } });

        //Forces a rerender of the component with the new value after onClick;
		wrapper.setProps({options: SORT_OPTIONS, value: state, onChange: handleSelectOnChange});
		wrapper.update();

		expect(state).toBe(SORT_OPTIONS[option].name);
	});
});
