import { h } from "preact";
import { mount } from "enzyme";
import { Button } from "../../components/atoms/Button";

describe("Test on Button", () => {
	test("should match initial snapshot", () => {
		let wrapper = mount(<Button text="InitialTest" />);
		expect(wrapper).toMatchSnapshot();
	});

	test("should have the text 'Button'", () => {
		const text = "Button";
		let wrapper = mount(<Button text={text} />);
		expect(wrapper.find("button").text().trim()).toBe(text);
	});
});
