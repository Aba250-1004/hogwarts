// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM is loaded!')
// })

// year1 

// Query for your div with the id of container and 
// set it to a variable named container
const container = document.querySelector("#container");
// console.log container
console.log(container);
// Create an <h1> element and set it to a 
//variable called h1 and console log it
const h1 = document.createElement("h1")
console.log(h1);
// Add some text inside the h1 element. Example text: 'Hogwarts'
h1.innerText = "Hogwarts";
// Append your h1 to your container
container.appendChild(h1)


// year 2
// h2 element with your name
const h2 = document.createElement("h2");
h2.innerText = "Amal Amchtal";
// console.log(h2);
container.appendChild(h2);
// h3 element with your house (Hufflepuff, Gryffindor, 
// Ravenclaw or Slytherin )
const h3 = document.createElement("h3");
h3.innerText = "Slytherin";
container.appendChild(h3);
// h4 element with your pet's name
// this h4 element should have a class with a value of 
// your pet type (owl, cat, toad, etc)
const h4 = document.createElement("h4");
h4.setAttribute("class","owl");
h4.innerText = "Toby";
container.appendChild(h4);
// h4 element with your wand (You can make it whatever you want. 
// Need help coming up with one? Here is one of many websites to 
// help you find your wand playbuzz.com )
const h42 = document.createElement("h4")
h42.innerText = "Basilisk scale";
container.appendChild(h42);
