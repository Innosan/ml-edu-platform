import type { NavigationLink } from "~/types/utility/NavigationLink";

export const weekdays = [
	"Понедельник",
	"Вторник",
	"Среда",
	"Четверг",
	"Пятница",
	"Суббота",
	"Воскресенье",
];

export const userNavigation: NavigationLink[] = [
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
	{
		id: 3,
		to: "/settings",
		label: "Настройки",
		icon: "i-heroicons-cog-solid",
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

export const teacherNavigation: NavigationLink[] = [
	{
		id: 1,
		to: "/",
		label: "Сводка",
		icon: "i-heroicons-presentation-chart-line-solid",
	},
	{
		id: 2,
		to: "/tests",
		label: "Все тесты",
		icon: "i-heroicons-academic-cap-solid",
	},
	{
		id: 3,
		to: "/students",
		label: "Студенты",
		icon: "i-heroicons-users-solid",
	},
	{
		id: 3,
		to: "/settings",
		label: "Настройки",
		icon: "i-heroicons-cog-solid",
	},
];
