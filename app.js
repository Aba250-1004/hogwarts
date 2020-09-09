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

// year 4

// make a table
const table = document.createElement("table");
// console.log(table);
container.appendChild(table);

// Right above your table add an h5 that says 'Spring 2017'
const h5 = document.createElement("h5");
h5.innerText = "Spring 2017";
// console.log(h5);
container.insertBefore(h5,table);
// Inside the table add a thead element
const thead = document.createElement("thead");
// console.log(thead);
table.appendChild(thead)
// Inside the thead element add two th elements
// in the first th add the text Day
const th1 = document.createElement("th");
th1.innerText = "Day";
thead.appendChild(th1);
// in the second th add the text Classes
const th2 = document.createElement("th");
th2.innerText = "Classes";
thead.appendChild(th2);
// Create a tr element and add two td elements inside.
const tr = document.createElement("tr");
const tdMD = document.createElement("td");
const tdMC = document.createElement("td");
table.appendChild(tr);
// in the first td add the day Monday
tdMD.innerHTML = "Monday";
tr.appendChild(tdMD)
// in the second td add the classes you are taking 
// ( Herbology, Divination, History of Magic, Charms, Potions,
// Transfiguration, Defense Against the Dark Arts, Quidditch 
// practice, etc.)
tdMC.innerHTML = "Herbology";
tr.appendChild(tdMC)

// Create more tr elements with tds inside so that you
//  have Monday - Friday and classes each of those days
const tr1 = document.createElement("tr");
const tdTD = document.createElement("td");
const tdTC = document.createElement("td");
table.appendChild(tr1);

tdTD.innerHTML = "Tuesday";
tr1.appendChild(tdTD)

tdTC.innerHTML = "Divination and Defense Against the Dark Arts";
tr1.appendChild(tdTC)

const tr2 = document.createElement("tr");
const tdWD = document.createElement("td");
const tdWC = document.createElement("td");
table.appendChild(tr2);

tdWD.innerHTML = "Wednesday";
tr2.appendChild(tdWD)

tdWC.innerHTML = "Charms";
tr2.appendChild(tdWC)

const tr3 = document.createElement("tr");
const tdTHD = document.createElement("td");
const tdTHC = document.createElement("td");
table.appendChild(tr3);

tdTHD.innerHTML = "Thursday";
tr3.appendChild(tdTHD)

tdTHC.innerHTML = "Potions";
tr3.appendChild(tdTHC)

const tr4 = document.createElement("tr");
const tdFD = document.createElement("td");
const tdFC = document.createElement("td");
table.appendChild(tr4);

tdFD.innerHTML = "Friday";
tr4.appendChild(tdFD)

tdFC.innerHTML = "Quitditch Practice";
tr4.appendChild(tdFC)


// year 5 
// Break your wand! (select the element that contains 
// your wand and remove it)
h42.remove();
// Class was hard! Drink all your butter beer! 
// (remove just the butter beer from your list)
li1.remove();
// Get a new wand (add the same element back with 
// new text describing your new wand. Be sure to insert
//  it after your pet in the DOM)
container.insertBefore(h42,ul);
h42.innerHTML= "New Cooler Wand"
// Make your new wand stand out by adding a color of 
// indigo (or whatever color you like). But do it with magic 
// (DOM manipulation): Don't add this css in your main.css file
h42.style.color = "purple";
// Send your pet on a spy mission (remove your pet 
// from the DOM, put it somewhere else in your HTML). 
// Make sure your pet's leash stays in your trunk (list 
// item with the same class as your pet inside unordered list)
h4.remove();
container.appendChild(h4);
// Have your pet come back (remove your pet from the
// DOM, put it back in its original location)
h4.remove();
container.insertBefore(h4,h42);