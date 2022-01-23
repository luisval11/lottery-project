import { h } from "preact";
import { mount } from "enzyme";
import { Input } from "../../components/atoms/Input";

describe("Test on Input", () => {
	test("should match initial snapshot", () => {
		let wrapper = mount(
			<Input
				type={"radio"}
				checked={false}
				value={"name"}
				onChange={(event) => {
					const value = event.target.value;
					console.log(value);
				}}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("should have a value 'radio' for type", () => {
		const typeParam = "radio";
		let wrapper = mount(<Input type={typeParam} />);
		const { type } = wrapper.find("input").props();
		expect(type).toBe(typeParam);
	});
});
