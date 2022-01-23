import { h } from "preact";

export const LinkA = ({ href, ...rest }) => {
	return <a href={href} {...rest} />;
};
