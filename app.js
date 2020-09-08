// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM is loaded!')
// })

// year1 

// Query for your div with the id of container and 
// set it to a variable named container
const container = document.querySelector("#container");
// console.log container
// console.log(container);
// Create an <h1> element and set it to a 
//variable called h1 and console log it
const h1 = document.createElement("h1")
// console.log(h1);
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


// year 3
const ul = document.createElement("ul");
ul.setAttribute("data-storage","trunk");
//console.log(ul);
container.appendChild(ul);

// butter beer
const li1 = document.createElement("li");
li1.innerText = "butter beer";
ul.appendChild(li1);

// invisibility cloak

const li2 = document.createElement("li");
li2.innerText = "invisibility cloak";
li2.setAttribute("class","secret");
// console.log(li2)
ul.appendChild(li2);

// magic map
const li3 = document.createElement("li");
li3.innerText = "magic map";
li3.setAttribute("class","secret");
ul.appendChild(li3);

// time turner
const li4 = document.createElement("li");
li4.innerText = "time turner";
li4.setAttribute("class","secret");
ul.appendChild(li4);

//leash
const li5 = document.createElement("li");
li5.innerText = "leash";
li5.setAttribute("class","owl");
ul.appendChild(li5);

// Bertie Bott's Every Flavor [Jelly] Beans
const li6 = document.createElement("li");
li6.innerText = "Bertie Bott's Every Flavor Jelly Beans";
ul.appendChild(li6);