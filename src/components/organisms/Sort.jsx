import { Fragment, h } from "preact";
import chevronDown from "../../assets/images/chevron-down.png";
import { Image } from "../atoms/Image";
import { Radio } from "../molecules/Radio";

export const Sort = ({
	sortOptions,
	sortValue,
	isOpenSort,
	handleOpenSort,
	handleSelectOnChange,
	title,
}) => {
	return (
		<Fragment>
			<div className={`sort__wrapper-select${isOpenSort ? "--hidden" : ""}`}>
				<span className="sort__select" onClick={handleOpenSort}>
					<Image className="sort__select-image" src={chevronDown} />
					{title}
				</span>
			</div>
			<div className={`sort__wrapper-select${isOpenSort ? "" : "--hidden"}`}>
				<div>
					<span
						className={`sort__select${isOpenSort ? "--open" : ""}`}
						onClick={handleOpenSort}
					>
						<Image className="sort__select-image--open" src={chevronDown} />
						{title}
					</span>
				</div>
				<Radio
					value={sortValue}
					options={sortOptions}
					onChange={handleSelectOnChange}
				/>
			</div>
		</Fragment>
	);
};
