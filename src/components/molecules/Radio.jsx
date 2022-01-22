import RadioSelected from "../../assets/images/Radio-selected.png";
import RadioUnselected from "../../assets/images/Radio.png";
import { Image } from "../atoms/Image";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

export const Radio = ({ options, value, onChange }) => {
	return (
		<div className="radio">
			{options.map((option, id) => {
				return (
					<Label
						className={"radio__label"}
						children={
							<>
								<Image
									src={value === option.name ? RadioSelected : RadioUnselected}
								/>
								<Input
									className="hidden"
									key={id}
									type={"radio"}
									checked={value === option.name}
									value={option.name}
									onChange={(event) => {
										const value = event.target.value;
										onChange(value);
									}}
								/>
							</>
						}
						text={option.text}
					></Label>
				);
			})}
		</div>
	);
};
