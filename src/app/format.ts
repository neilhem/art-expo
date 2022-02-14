export function formatDate(
  date: Date,
  dateStyle: Intl.DateTimeFormatOptions['dateStyle'] = 'short',
  timeStyle: Intl.DateTimeFormatOptions['timeStyle'] = 'short',
  locale?: string
): string {
  const formatter = Intl.DateTimeFormat(locale, {
    dateStyle: dateStyle,
    timeStyle: timeStyle,
  });

  return formatter.format(date);
}
