/**
 * Receives Date object and an offset "n" representing amount of days to reduce from the initial date, and returns a new date object after reducing "n" from the initial date. Returned value is a string in the format YYYY-MM-DD. The function takes into account month and year overlaps.
 * @param date Date object
 * @param n Amount of days to reduce from original date
 * @returns ISO Formatted date string YYYY-MM-DD
 */

const reduceMinute = (date: Date, n: number): Date => {
	const newDate = new Date(date);
	newDate.setMinutes(newDate.getMinutes() - n);
	return newDate;
};

const reduceHour = (date: Date, n: number): Date => {
	const newDate = new Date(date);
	newDate.setHours(newDate.getHours() - n);
	return newDate;
};

const reduceDays = (date: Date, n: number): Date => {
	const newDate = new Date(date);
	newDate.setDate(newDate.getDate() - n);
	return newDate;
};

const reduceMonth = (date: Date, n: number): Date => {
	const newDate = new Date(date);
	newDate.setMonth(newDate.getMonth() - n);
	return newDate;
};

const reduceYear = (date: Date, n: number): Date => {
	const newDate = new Date(date);
	newDate.setFullYear(newDate.getFullYear() - n);
	return newDate;
};

export { reduceMinute, reduceHour, reduceDays, reduceMonth, reduceYear };