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



const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  built:"2005",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  built:"1888",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  built:"2015",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  built:"2020",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  built:"1974",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  built:"1986",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  built:"1983",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Chicago Illinois Temple",
		location: "Glenview, Illinois, United States",
		dedicated: "1985, August, 9",
		built:"1985",
		area: 37062,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-58403-main.jpg"
	  },
	  {
		templeName: "Arequipa Peru Temple",
		location: "Arequipa, Peru",
		dedicated: "2019, December, 15",
		built:"2019",
		area: 26969,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg"
	  },
	  {
		templeName: "Lima Peru Los Olivos Temple",
		location: "Lima, Peru",
		dedicated: "2024, January, 14",
		built:"2024",
		area: 47413,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42524-main.jpg"
	  }


	// Add more temple objects here...
  ];

 
  function renderImages(data) {
    const album = document.getElementById("album");
    album.innerHTML = ""; // Clear previous content
    data.forEach(item => {
        const card = document.createElement("figure");
        card.classList.add("card");
        card.innerHTML = `

            <img src="${item.imageUrl}" alt="${item.templeName}" loading="lazy">
			<figcaption>
            <h3>${item.templeName}</h3>
            <p><b>Location:</b> ${item.location}</p>
			<p><b>Dedicated:</b> ${item.dedicated}</p>
			<p><b>Size:</b> ${item.area} sq ft</p>
			</figcaption>

        `;
        album.appendChild(card);
    });
}

renderImages(temples);

function filterarray(criteria){

	let filtered;
            if (criteria === "lessthan10000") {
                filtered = temples.filter(item => item.area < 10000);
            } else if (criteria === "largerthan10000") {
                filtered = temples.filter(item => item.area >= 90000);
            } else if (criteria === "before1900") {
                filtered = temples.filter(item => item.built < 1900);
            } else if (criteria === "after2000") {
                filtered = temples.filter(item => item.built >= 2000);
            }

			else {
                filtered = temples; // Show all
            }
            renderImages(filtered);
}






