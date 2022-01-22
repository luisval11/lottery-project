import imageLogo from "../../assets/images/image.png";
import info from "../../assets/images/info.png";
import { normalizeUrl } from "../../helpers/helpers";
import { Button } from "../atoms/Button";
import { Image } from "../atoms/Image";
import { LinkA } from "../atoms/LinkA";

export const ListItem = ({ id, item, handleSelectItem, selectedItem }) => {
	const { displayName, provider, currencyData } = item;
	const image = normalizeUrl(item.image);
	const playURL = normalizeUrl(item.playURL);

	const handleOnClick = () => {
		handleSelectItem(id);
	};

	return (
		<div
			className={`list-item__wrapper-rectangle${
				selectedItem === id ? "--selected" : ""
			}`}
		>
			<div
				className={`list-item${selectedItem === id ? "--selected" : ""}`}
				onClick={handleOnClick}
			>
				<div className="list-item__wrapper">
					<div>
						<Image
							className={`list-item__info-image${
								!(selectedItem === id) ? "--hidden" : ""
							}`}
							src={info}
							alt="Information"
						/>
						<Image
							className="list-item__image"
							src={image}
							alt={displayName}
						/>
					</div>
					<div className="list-item__info">
						{provider && <label>{provider.join(",")}</label>}
						{displayName && <h5>{displayName}</h5>}
						{currencyData &&
							currencyData.EUR &&
							currencyData.EUR.minimumStake && (
								<label>€{currencyData.EUR.minimumStake} min. Stake</label>
							)}
					</div>
				</div>
				{playURL && (
					<LinkA
						className={`list-item__button${
							!(selectedItem === id) ? "--hidden" : ""
						}`}
						href={playURL}
						children={<Button className="list-item__link-button" text="Play" />}
					/>
				)}
			</div>
			<div
				className={`list-item__item-separator${
					selectedItem === id ? "--selected" : ""
				}`}
			/>
		</div>
	);
};
