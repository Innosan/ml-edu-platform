export type News = {
	id: string;
	title: string;
	description: string;
	time: string;
};

export const mockNews: News[] = [
	{
		id: "1",
		title: "Будет добавлен тест 10",
		description:
			"Вы можете проверить свои знания по теме 'Сочинение по картине'",
		time: "2024-10-10 11:00",
	},
	{
		id: "2",
		title: "Проверка работ",
		description:
			"Были проверены тесты 1 и 2, результаты доступны на странице предмета и в вашем профиле!",
		time: "2024-10-01 12:00",
	},
	{
		id: "3",
		title: "Новый урок",
		description: "Добавлен новый урок по теме 'Сочинение по картине'",
		time: "2024-10-01 13:00",
	},
];
