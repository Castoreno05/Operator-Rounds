import { DateTime } from "luxon";

export const capitalizeFirstCharacter = (
	word?: string,
	emptyString?: string
) => {
	if (word) return word.charAt(0).toUpperCase() + word.slice(1);
	else return emptyString || "-";
};

export const formatDateString = (date: string) => {
	return DateTime.fromJSDate(new Date(date)).toLocaleString(
		DateTime.DATETIME_SHORT_WITH_SECONDS
	);
};
