// let city = prompt("Enter your city name:");
// if (city.toLowerCase() === "karachi") {
//     alert("Welcome to city of lights");
// }



// let gender = prompt("Enter your gender (male/female):");
// if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir");
// } else if (gender.toLowerCase() === "female") {
//     alert("Good Morning Ma’am");
// }



// let signalColor = prompt("Enter the traffic signal color (Red/Yellow/Green):").toLowerCase();
// if (signalColor === "red") {
//     alert("Must Stop");
// } else if (signalColor === "yellow") {
//     alert("Ready to move");
// } else if (signalColor === "green") {
//     alert("Move now");
// }



// let fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }




// a
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// // b
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// // c
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// // e
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// // f
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }



// let subject1 = parseInt(prompt("Enter marks obtained in first subject:"));
// let subject2 = parseInt(prompt("Enter marks obtained in second subject:"));
// let subject3 = parseInt(prompt("Enter marks obtained in third subject:"));
// let totalMarks = parseInt(prompt("Enter total marks:"));

// let marksObtained = subject1 + subject2 + subject3;
// let percentage = (marksObtained / totalMarks) * 100;

// let grade, remarks;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// alert(`Marks Sheet\nTotal marks: ${totalMarks}\nMarks obtained: ${marksObtained}\nPercentage: ${percentage}%\nGrade: ${grade}\nRemarks: ${remarks}`);



// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userGuess = parseInt(prompt("Guess the secret number (1-10):"));

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// }


// let number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//     alert("The number is divisible by 3");
// } else {
//     alert("The number is not divisible by 3");
// }






// let num = parseInt(prompt("Enter a number:"));
// if (num % 2 === 0) {
//     alert("The number is even");
// } else {
//     alert("The number is odd");
// }




// let temperature = parseInt(prompt("Enter the temperature:"));
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// }





let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    result = firstNumber / secondNumber;
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    result = "Invalid operation";
}

alert("The result is: " + result);

