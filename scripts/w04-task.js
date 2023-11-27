/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "James Green",
    photo: "../images/placeholder.png",
    favoriteFoods: ['Grilled Chicken', 'McDonalds', 'Spaghetti'],
    hobbies: ['Programming', 'Video Games', 'Nature walks with the wife'],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Alexandria, VA',
        length: '20 years'
    },
    {
        place: 'California',
        length: '2 years'
    },
    {
        place: 'Logan',
        length: '2 years'
    },
    {
        place: 'Idaho',
        length: '1 year'
    }
);




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
let favoriteFoodsList = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    favoriteFoodsList.appendChild(li);
});

/* Hobbies List */
let hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    hobbiesList.appendChild(li);
});

/* Places Lived DataList */
let placesLivedList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});
