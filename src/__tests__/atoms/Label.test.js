import { h } from "preact";
import { mount } from "enzyme";
import { Label } from "../../components/atoms/Label";

describe("Test on Label", () => {
	test("should match initial snapshot", () => {
		let wrapper = mount(
			<Label text={"Label"}/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("should have a value 'label' for text", () => {
		const textParam = "label";
		let wrapper = mount(<Label text={textParam} />);
		expect(wrapper.find('label').text().trim()).toBe(textParam);
	});
});
