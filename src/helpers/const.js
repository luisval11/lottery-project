export const URL_LOTTOLAND = "https://www.lottoland.co.uk";
export const SORT_OPTION_NAME = "name";
export const SORT_OPTION_EUR_STAKE_ASC = "stakeEurAsc";
export const SORT_OPTION_EUR_STAKE_DESC = "stakeEurDesc";
export const MAX_GAMES_PER_PAGE = 9;
export const SORT_OPTIONS = [
	{ name: SORT_OPTION_NAME, text: "Name (A-Z)" },
	{ name: SORT_OPTION_EUR_STAKE_ASC, text: "Stake (min to max)" },
	{ name: SORT_OPTION_EUR_STAKE_DESC, text: "Stake (max to min)" },
];
export const EXAMPLE_LISTITEM = {
	LuckyWizard: {
		name: "LuckyWizard",
		displayName: "Lucky Wizard",
		playURL: "/games/luckywizard/play",
		image: "/cms/5bab9d950eb3580fac83392e/Icon_320and250_LuckyWizard.jpg",
		detailURL: "/games/luckywizard",
		currencyData: {
			CHF: {
				noDesk: true,
				noMob: true,
			},
			EUR: {
				minimumStake: 0.1,
			},
			GBP: {
				minimumStake: 0.1,
			},
			SEK: { minimumStake: 1.0 },
			PLN: {},
			JPY: {},
			INR: {},
			NZD: { minimumStake: 0.1 },
			CAD: {},
			HUF: {},
		},
		volatility: ["High"],
		provider: ["RedTiger"],
	},
};
