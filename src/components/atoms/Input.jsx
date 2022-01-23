import { h } from "preact";

export const Input = ({type, ...rest}) => {
	return (
		<input type={type} {...rest}/>
	);
};
