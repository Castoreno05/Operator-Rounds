import { DateTime } from "luxon";

export const formatDateString = (date: string) => {
	return DateTime.fromJSDate(new Date(date)).toLocaleString(
		DateTime.DATETIME_SHORT_WITH_SECONDS
	);
};
