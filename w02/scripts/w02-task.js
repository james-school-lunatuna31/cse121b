/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "James Green";
let currentYear = new Date().getFullYear();
let profilePicture = "/w02/images/placeholder.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const year = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = "<strong>${fullName}</strong>";
nameElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */
let favoriteFoods = ["Pizza", "Burger", "Pasta"];
foodElement.innerHTML = favoriteFoods.join(", ") + "<br>";
let newFavoriteFood = "Ice Cream";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += favoriteFoods.join(", ") + "<br>";
favoriteFoods.shift();
foodElement.innerHTML += favoriteFoods.join(", ") + "<br>";
favoriteFoods.pop();
foodElement.innerHTML += favoriteFoods.join(", ");


