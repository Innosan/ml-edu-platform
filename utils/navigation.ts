import type { NavigationLink } from "~/types/utility/NavigationLink";

export const navigation: NavigationLink[] = [
	{
		id: 1,
		to: "/",
		label: "Сводка",
		icon: "i-heroicons-presentation-chart-line-solid",
	},
	{
		id: 2,
		to: "/courses",
		label: "Все курсы",
		icon: "i-heroicons-academic-cap-solid",
	},
	// {
	// 	id: 3,
	// 	to: "/teachers",
	// 	label: "Преподаватели",
	// 	icon: "i-heroicons-identification-solid",
	// },
	// {
	// 	id: 4,
	// 	to: "/chats",
	// 	label: "Чаты",
	// 	icon: "i-heroicons-chat-bubble-bottom-center-text-solid",
	// },
	{
		id: 5,
		to: "/schedule",
		label: "Расписание",
		icon: "i-heroicons-calendar-date-range-solid",
	},
];

export const socials: NavigationLink[] = [
	{
		id: 1,
		to: "https://github.com",
		label: "GitHub",
		icon: "i-octicon-mark-github-16",
	},
	{
		id: 2,
		to: "https://telegram.com",
		label: "Telegram",
		icon: "i-streamline-telegram-solid",
	},
];
