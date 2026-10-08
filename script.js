// Array Higher-Order Methods

// 1. forEach() — Print each number
let numbers1 = [12, 24, 36, 48, 60];

numbers1.forEach(function(num) {
    console.log(num);
});


// 2. forEach() — Print Hello with each student name
let students2 = ["Vijay", "Arun", "Praveen", "Sanjay"];

students2.forEach(function(name) {
    console.log("Hello, " + name);
});


// 3. map() — Multiply each number by 3
let numbers3 = [2, 4, 6, 8, 10];

let result3 = numbers3.map(function(num) {
    return num * 3;
});

console.log(result3);


// 4. map() — Add 150 to every price
let prices4 = [150, 250, 350, 450];

let result4 = prices4.map(function(price) {
    return price + 150;
});

console.log(result4);


// 5. filter() — Get only even numbers
let numbers5 = [12, 17, 22, 27, 32, 37];

let evenNumbers5 = numbers5.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers5);


// 6. filter() — Get students aged 18 or above
let ages6 = [16, 19, 22, 17, 24, 15];

let adults6 = ages6.filter(function(age) {
    return age >= 18;
});

console.log(adults6);


// 7. find() — Find first number greater than 60
let numbers7 = [15, 30, 45, 55, 70, 85];

let result7 = numbers7.find(function(num) {
    return num > 60;
});

console.log(result7);


// 8. find() — Find first student with mark greater than 75
let students8 = [
    { name: "Vijay Anand", mark: 72 },
    { name: "Arun Kumar", mark: 78 },
    { name: "Praveen", mark: 88 }
];

let student8 = students8.find(function(s) {
    return s.mark > 75;
});

console.log(student8);


// 9. reduce() — Calculate total sum
let numbers9 = [15, 25, 35, 45, 55];

let total9 = numbers9.reduce(function(sum, num) {
    return sum + num;
}, 0);

console.log(total9);


// 10. reduce() — Calculate total price
let prices10 = [150, 250, 350, 450];

let total10 = prices10.reduce(function(sum, price) {
    return sum + price;
}, 0);

console.log(total10);


// 11. some() — Check if at least one number is greater than 90
let numbers11 = [25, 45, 65, 95, 35];

let result11 = numbers11.some(function(num) {
    return num > 90;
});

console.log(result11);


// 12. every() — Check whether all marks are above 40
let marks12 = [45, 55, 65, 75, 85];

let result12 = marks12.every(function(mark) {
    return mark > 40;
});

console.log(result12);


// Sort / Join / Array Conversion

// 13. sort() — Ascending order
let numbers13 = [70, 20, 50, 10, 40];

numbers13.sort(function(a, b) {
    return a - b;
});

console.log(numbers13);


// 14. sort() — Descending order
let numbers14 = [70, 20, 50, 10, 40];

numbers14.sort(function(a, b) {
    return b - a;
});

console.log(numbers14);


// 15. toString() — Convert array into a string
let students15 = ["Vijay", "Arun", "Praveen", "Sanjay"];

let result15 = students15.toString();

console.log(result15);


// 16. join() — Combine names using " - "
let names16 = ["Vijay", "Arun", "Praveen", "Sanjay"];

let result16 = names16.join(" - ");

console.log(result16);


// 17. join() — Display products as one sentence
let products17 = ["Laptop", "Smartphone", "Keyboard", "Mouse"];

let result17 = products17.join(", ");

console.log(result17);


// String Methods

// 18. charAt() — Character at index 3
let text18 = "Vijay Anand";

let result18 = text18.charAt(3);

console.log(result18);


// 19. charCodeAt() — Character code of first character
let text19 = "Vijay";

let result19 = text19.charCodeAt(0);

console.log(result19);


// 20. length — Find string length
let text20 = "Vijay Anand";

console.log(text20.length);


// 21. slice() — Extract "JavaScript"
let text21 = "JavaScript Developer";

let result21 = text21.slice(0, 10);

console.log(result21);


// 22. toUpperCase() — Convert lowercase to uppercase
let text22 = "vijay anand";

let result22 = text22.toUpperCase();

console.log(result22);


// 23. toLowerCase() — Convert uppercase to lowercase
let text23 = "VIJAY ANAND";

let result23 = text23.toLowerCase();

console.log(result23);


// 24. trim() — Remove extra spaces
let text24 = "   Vijay Anand   ";

let result24 = text24.trim();

console.log(result24);


// 25. includes(), indexOf(), startsWith(), endsWith()
let sentence25 = "Hello Vijay, Welcome to JavaScript";

console.log(
    "Includes JavaScript:",
    sentence25.includes("JavaScript")
);

console.log(
    "Index of JavaScript:",
    sentence25.indexOf("JavaScript")
);

console.log(
    "Starts with Hello:",
    sentence25.startsWith("Hello")
);

console.log(
    "Ends with JavaScript:",
    sentence25.endsWith("JavaScript")
);


// Date Methods

// 26. Current Year, Month, Date and Day
let date26 = new Date();

console.log("Year:", date26.getFullYear());
console.log("Month:", date26.getMonth() + 1);
console.log("Date:", date26.getDate());
console.log("Day:", date26.getDay());

// getMonth() starts from 0, so we use + 1.
// getDay() returns 0 for Sunday, 1 for Monday,
// ..., 6 for Saturday.


// 27. Current Hours, Minutes and Seconds
let date27 = new Date();

console.log("Hours:", date27.getHours());
console.log("Minutes:", date27.getMinutes());
console.log("Seconds:", date27.getSeconds());


// 28. Change the year using setFullYear()
let date28 = new Date();

date28.setFullYear(2028);

console.log(date28);


// 29. Change month and date
let date29 = new Date();

date29.setMonth(7);
date29.setDate(18);

console.log(date29);


// 30. Get date of birth and find the day
let dob30 = prompt("Enter your date of birth (YYYY-MM-DD):");

let date30 = new Date(dob30);
let day30 = date30.getDay();

if (day30 === 0) {
    console.log("You were born on Sunday");
} else if (day30 === 1) {
    console.log("You were born on Monday");
} else if (day30 === 2) {
    console.log("You were born on Tuesday");
} else if (day30 === 3) {
    console.log("You were born on Wednesday");
} else if (day30 === 4) {
    console.log("You were born on Thursday");
} else if (day30 === 5) {
    console.log("You were born on Friday");
} else {
    console.log("You were born on Saturday");
}
