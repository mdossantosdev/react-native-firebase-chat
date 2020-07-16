export const calcDate = (date) => {
  const newDate = new Date(date);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
    newDate
  );
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(
    newDate
  );
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(newDate);

  return `${day} ${month} ${year}`;
};
