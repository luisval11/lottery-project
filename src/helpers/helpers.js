import { SORT_OPTION_EUR_STAKE_ASC, SORT_OPTION_EUR_STAKE_DESC, SORT_OPTION_NAME, URL_LOTTOLAND } from "./const";

export const normalizeUrl = (endpoint) => {
	return URL_LOTTOLAND + endpoint;
};

export const isValidGame = (game) => {
	return (
		game.currencyData != undefined &&
		game.currencyData.EUR != undefined &&
		game.currencyData.EUR.minimumStake != undefined
	);
};

export const getItemsToShow = (sort, initialValues, initial, size) => {
	switch (sort) {
		case SORT_OPTION_NAME:
			return Object.values(initialValues)
				.filter((game) => isValidGame(game))
				.sort((gameA, gameB) => {
					return gameA.displayName.localeCompare(gameB.displayName);
				})
				.slice(initial, size);

		case SORT_OPTION_EUR_STAKE_ASC:
			return Object.values(initialValues)
				.filter((game) => isValidGame(game))
				.sort((gameA, gameB) => {
					return (
						gameA.currencyData.EUR.minimumStake -
						gameB.currencyData.EUR.minimumStake
					);
				})
				.slice(initial, size);

		case SORT_OPTION_EUR_STAKE_DESC:
			return Object.values(initialValues)
				.filter((game) => isValidGame(game))
				.sort((gameA, gameB) => {
					return (
						gameB.currencyData.EUR.minimumStake -
						gameA.currencyData.EUR.minimumStake
					);
				})
				.slice(initial, size);
	}
};
