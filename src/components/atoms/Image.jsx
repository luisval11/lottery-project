import { h } from "preact";

export const Image = ({src, ...rest}) => {
	return <img src={src} {...rest} />;
};
