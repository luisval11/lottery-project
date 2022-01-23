import { h } from "preact";
import { ListItem } from "../molecules/ListItem";

export const List = ({ items, className, handleSelectItem, selectedItem }) => {
	return (
		<div className={className}>
			{Object.values(items).map((item, id) => {
				return (
					<ListItem
						key={id}
						id={id}
						item={item}
						handleSelectItem={handleSelectItem}
						selectedItem={selectedItem}
					/>
				);
			})}
		</div>
	);
};
