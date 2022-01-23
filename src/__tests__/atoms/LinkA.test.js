import { h } from "preact";
import { mount } from "enzyme";
import { LinkA } from "../../components/atoms/LinkA";
import { URL_LOTTOLAND } from "../../helpers/const";

describe("Test on LinkA", () => {
	test("should match initial snapshot", () => {
		let wrapper = mount(
			<LinkA href={"#"}/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("should have the value of const 'URL_LOTTOLAND' for href", () => {
		const hrefParam = URL_LOTTOLAND;
		let wrapper = mount(<LinkA href={hrefParam} />);
		const { href } = wrapper.find("a").props();
		expect(href).toBe(hrefParam);
	});

    test("should have a value 'Play' for text", () => {
		const textParam = "Play";
		let wrapper = mount(<LinkA text={textParam} />);
		expect(wrapper.find('a').text().trim()).toBe(textParam);
	});
});
