// let multiArray = [[]];


// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];


// for (let i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }


// let tableNumber = parseInt(prompt("Enter the table number:"));
// let tableLength = parseInt(prompt("Enter the length of the table:"));

// for (let i = 1; i <= tableLength; i++) {
//     document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }


// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }

// for (let i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }


// a. Counting
// document.write("Counting:<br>");
// for (let i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }
// document.write("<br><br>");

// b. Reverse counting
// document.write("Reverse counting:<br>");
// for (let i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }
// document.write("<br><br>");

// c. Even
// document.write("Even:<br>");
// for (let i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br><br>");

// d. Odd
// document.write("Odd:<br>");
// for (let i = 1; i < 20; i += 2) {
//     document.write(i + ", ");
// }
// document.write("<br><br>");

// e. Series
// document.write("Series:<br>");
// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }
// document.write("<br><br>");



// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let searchItem = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

// let found = false;
// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === searchItem.toLowerCase()) {
//         document.write(searchItem + " is available at index " + i + " in our bakery<br>");
//         found = true;
//         break;
//     }
// }
// if (!found) {
//     document.write("We are sorry. " + searchItem + " is not available in our bakery<br>");
// }


// let A = [24, 53, 78, 98, 12];
// let largestNumber = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i];
//     }
// }

// document.write("Array items: " + A.join(", ") + "<br>");
// document.write("The largest number is " + largestNumber + "<br>");


// let A = [24, 53, 78, 91, 9];
// let smallestNumber = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallestNumber) {
//         smallestNumber = A[i];
//     }
// }

// document.write("Array items: " + A.join(", ") + "<br>");
// document.write("The smallest number is " + smallestNumber + "<br>");



for (let i = 5; i <= 100; i += 5) {
    document.write(i + ", ");
}


