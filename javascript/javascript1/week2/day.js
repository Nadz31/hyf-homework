
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let d = new Date();
let Today = days[d.getDay()];


let daysToMeet = 9;


let meetingDay = daysToMeet % (days.length+1);

console.log('Today is: ' + Today);
console.log('How many days to meet: ' + daysToMeet);
console.log('We are meeting on: ' + days[meetingDay]);
