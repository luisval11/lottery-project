import { h } from "preact";
import { mount } from "enzyme";
import { Image } from "../../components/atoms/Image";
import image from "../../assets/images/image.png";

describe("Test on Image", () => {
	test("should match initial snapshot", () => {
		let wrapper = mount(<Image src={image} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("should have a value for src", () => {
		const srcParam = image;
		let wrapper = mount(<Image src={srcParam} />);
        const {src} = wrapper.find('img').props();
        //Due to the parsing through test-file-stub, the src value return test-file-stub
        expect(src).toBe("test-file-stub");
	});

    test("should have a value for alt", () => {
		const altParam = "Alternative text";
		let wrapper = mount(<Image alt={altParam} />);
        const {alt} = wrapper.find('img').props();
        expect(alt).toBe(altParam);
	});
});
