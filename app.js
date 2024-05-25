// let studentNamesLiteral = [];


// let studentNamesObject = new Array();


// let stringsArray = ["apple", "banana", "cherry"];


// let numbersArray = [1, 2, 3, 4, 5];


// let booleanArray = [true, false, true, false];


// let mixedArray = [1, "two", true, null, undefined];


// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>Qualifications:</h1><ul>");
// for (let i = 0; i < qualifications.length; i++) {
//     document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ul>");


// let studentNames = ["Michael", "John", "Tony"];
// let studentScores = [320, 230, 480];
// let totalMarks = 500;

// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (studentScores[i] / totalMarks) * 100;
//     document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%<br>");
// }


// let colors = ["Red", "Green", "Blue"];
// document.write("<h1>Initial Colors:</h1> " + colors.join(", ") + "<br>");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddBeginning);
// document.write("<h1>After adding color to the beginning:</h1> " + colors.join(", ") + "<br>");

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
// let colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);
// document.write("<h1>After adding color to the end:</h1> " + colors.join(", ") + "<br>");

// c. Add two more colors to the beginning of the array.
// colors.unshift("Yellow", "Purple");
// document.write("<h1>After adding two more colors to the beginning:</h1> " + colors.join(", ") + "<br>");

// d. Delete the first color in the array.
// colors.shift();
// document.write("<h1>After deleting the first color:</h1> " + colors.join(", ") + "<br>");

// e. Delete the last color in the array.
// colors.pop();
// document.write("<h1>After deleting the last color:</h1> " + colors.join(", ") + "<br>");

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
// let indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
// let colorToAdd = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("<h1>After adding color at index " + indexToAdd + ":</h1> " + colors.join(", ") + "<br>");

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index.
// let indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
// let numOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(indexToDelete, numOfColorsToDelete);
// document.write("<h1>After deleting color(s) from index " + indexToDelete + ":</h1> " + colors.join(", ") + "<br>");


// let scores = [320, 145, 480, 120];
// document.write("Scores of Students: " + scores.join(", ") + "<br>");
// scores.sort(function(a, b) { return a - b; });
// document.write("Ordered Scores of Students: " + scores.join(", ") + "<br>");


// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("<h1>Cities list:</h1> " + cities.join(", ") + "<br>");

// let selectedCities = cities.slice(2, 4); // Copies elements from index 2 to index 4 (Islamabad, Quetta, Peshawar)
// document.write("<h1>Selected cities list:</h1> " + selectedCities.join(", ") + "<br>");



// let arr = ["This", " is", " my", " cat"];
// let singleString = arr.join("");
// document.write("Array: " + arr.join(",") + "<br>");
// document.write("String: " + singleString + "<br>");


// let devices = ["keyboard", "printer", "mouse", "monitor"];
// document.write("<h1>Devices:</h1> " + devices.join(", ") + "<br>");

// while (devices.length > 0) {
//     document.write("Out: " + devices.shift() + "<br>");
// }



// let devices = [];

// Function to push elements to the stack
// function pushToStack(element) {
//     devices.push(element);
// }

// Function to pop elements from the stack and display
// function displayStack() {
//     document.write("<h1>Devices in LIFO order:</h1>");
//     while (devices.length > 0) {
//         document.write("Out: " + devices.pop() + "<br>");
//     }
// }

// Storing values in LIFO order
// pushToStack("keyboard");
// pushToStack("mouse");
// pushToStack("printer");
// pushToStack("monitor");

// Displaying values in LIFO order
// displayStack();



let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h1>Select Phone Manufacturer:</h1>");
document.write("<select>");

for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");




