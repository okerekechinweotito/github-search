function formatTime(fullDate) {
  const date = fullDate.slice(0, 10).split("-");
  const [year, month, day] = date;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[month - 1]} ${day}, ${year}`;
}

export default formatTime;
