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

