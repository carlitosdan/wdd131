const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


d = new Date();
year = d.getFullYear();
document.getElementById("year").innerHTML = year;

document.getElementById("lastModified").innerHTML = document.lastModified;





const products = [
	{
	  id: "fc-1888",
	  name: "flux capacitor",
	  averagerating: 4.5
	},
	{
	  id: "fc-2050",
	  name: "power laces",
	  averagerating: 4.7
	},
	{
	  id: "fs-1987",
	  name: "time circuits",
	  averagerating: 3.5
	},
	{
	  id: "ac-2000",
	  name: "low voltage reactor",
	  averagerating: 3.9
	},
	{
	  id: "jj-1969",
	  name: "warp equalizer",
	  averagerating: 5.0
	}
  ];


  /*Populate the select_product input */

const myselect = document.getElementById("select_product");


const placeholder = document.createElement("option");
placeholder.textContent = "Select a Product";
placeholder.disabled = true;
placeholder.selected = true;
placeholder.value = ""; // empty value makes it invalid
myselect.appendChild(placeholder);

products.forEach(product => {
  const myoption = document.createElement("option");
  myoption.value = product.id;         // use object id as value
  myoption.textContent = product.name; // show name as text
  myselect.appendChild(myoption);
});



// Retrieve current form submission count, or initialize to 0 if not found
let submitCount = localStorage.getItem("submitCount");
if (submitCount === null) {
	submitCount = 0;
} else {
	submitCount = parseInt(submitCount);
}


// Handle form submission
const myform = document.getElementById("reviewForm");
myform.addEventListener("submit", function(event) {
	// Increment the submission count
	submitCount++;

	// Save the updated count to LocalStorage
	localStorage.setItem("submitCount", submitCount);
});




