import format from 'date-fns/format';

/**
 * Given a duration in minutes, convert to hour minute format (Ex: 1h 23m)
 * @param duration In minutes to convert
 */
export function toHourMinute(duration: number): string {
  return `${Math.trunc(duration / 60)}h ${Math.round(duration % 60)}m`;
}

/**
 * Converts a date to a short date string (Ex: Wed, Nov 14, 2018)
 * @param date To convert to short date string; time aspect is ignored
 */
export function toShortDate(date: Date): string {
  return format(date, 'ddd, MMM D, YYYY');
}

/**
 * Formats a date as an ISO 8601 Date string (Ex: 2018-11-17)
 * @param date To format into ISO Date
 */
export function toISODate(date: Date): string {
  return format(date, 'YYYY-MM-DD');
}
