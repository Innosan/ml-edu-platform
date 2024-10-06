export const getRelativeTime = (date: string) => {
	const units: [Intl.RelativeTimeFormatUnit, number][] = [
		["year", 31536000],
		["month", 2592000],
		["week", 604800],
		["day", 86400],
		["hour", 3600],
		["minute", 60],
		["second", 1],
	];

	const rtf = new Intl.RelativeTimeFormat("ru", { numeric: "auto" });
	const now = new Date();
	const targetDate = new Date(date);
	const elapsed = (targetDate.getTime() - now.getTime()) / 1000;

	for (const [unit, secondsInUnit] of units) {
		if (Math.abs(elapsed) >= secondsInUnit || unit === "second") {
			const value = Math.floor(elapsed / secondsInUnit);
			return rtf.format(value, unit);
		}
	}
};
