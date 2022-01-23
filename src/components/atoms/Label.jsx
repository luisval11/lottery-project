import { h } from "preact";
export const Label = ({ children, text, ...rest }) => {
	return (
		<label {...rest}>
			{children}
			{text}
		</label>
	);
};
