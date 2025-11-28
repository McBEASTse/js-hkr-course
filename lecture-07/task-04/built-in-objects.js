let radius = 5;
const circleArea = radius * radius * Math.PI;
console.log("==== Math object ====");
console.log(`A circle with radius ${radius} has the area ${circleArea}`);

const now = new Date();
// This is so dumb...
const fullTimeDate = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
};

const weekday = {
  weekday: "long",
};

console.log("==== Date object ====");
console.log(
  `The current time is and date is: ${now.toLocaleDateString("sv-SE", fullTimeDate)}.`,
  `The current day is: ${now.toLocaleDateString("sv-SE", weekday)}.`,
);
