import { h } from "preact";

export const Button = ({ text, ...rest }) => {
	return <button {...rest}>{text}</button>;
};
