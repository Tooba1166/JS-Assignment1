// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "!");


// let favoritePhone = prompt("Enter your favorite mobile phone model:");
// document.write("My favorite phone is: " + favoritePhone + "<br>");
// document.write("Length of string: " + favoritePhone.length);


// let word = "Pakistani";
// let index = word.indexOf("n");
// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + index);


// let word = "Hello World";
// let lastIndex = word.lastIndexOf("l");
// document.write("String: " + word + "<br>");
// document.write("Last index of 'l': " + lastIndex);


// let word = "Pakistani";
// let character = word.charAt(3);
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + character);


// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName.concat(" ", lastName);
// alert("Hello, " + fullName + "!");


// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity);


// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage = message.replace(/and/g, "&");
// document.write(newMessage);


// let str = "472";
// let num = Number(str);
// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof str + "<br>");
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num);


// let userInput = prompt("Enter a word:");
// let upperCaseInput = userInput.toUpperCase();
// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + upperCaseInput);


// let userInput = prompt("Enter a word:");
// let titleCaseInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + titleCaseInput);


// let num = 35.36;
// let str = num.toString().replace(".", "");
// document.write("Number: " + num + "<br>");
// document.write("Result: " + str);


// let username = prompt("Enter a username:");
// let invalidChars = /[!@.,]/;
// while (invalidChars.test(username)) {
//     alert("Please enter a valid username.");
//     username = prompt("Enter a username:");
// }
// alert("Username is valid.");


// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
// let index = A.indexOf(userInput);
// if (index !== -1) {
//     alert(userInput + " is available at index " + index + " in our bakery");
// } else {
//     alert("We are sorry. " + userInput + " is not available in our bakery");
// }


// let password = prompt("Enter a password:");
// let isValid = /^(?!\d)[A-Za-z\d]{6,}$/.test(password);
// while (!isValid) {
//     alert("Password must contain alphabets and numbers, should not start with a number, and must be at least 6 characters long.");
//     password = prompt("Enter a password:");
//     isValid = /^(?!\d)[A-Za-z\d]{6,}$/.test(password);
// }
// alert("Password is valid.");


// let university = "University of Karachi";
// let array = university.split("");
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i] + "<br>");
// }


// let userInput = prompt("Enter a word:");
// let lastChar = userInput.charAt(userInput.length - 1);
// document.write("User input: " + userInput + "<br>");
// document.write("Last character of input: " + lastChar);


let text = "The quick brown fox jumps over the lazy dog";
        let word = "the";
        let count = (text.toLowerCase().match(/the/g) || []).length;
        document.write("Text: " + text + "<br>");
        document.write("There are " + count + " occurrence(s) of word 'the'");