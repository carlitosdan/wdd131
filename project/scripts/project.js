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



function updateHeroImage() {
    const img = document.getElementById("hero-img");
    const width = window.innerWidth;

    if (width >= 1200) {
      img.src = "images/hero1920.webp";
    } else if (width >= 500) {
      img.src = "images/hero1024.webp";
    } else {
      img.src = "images/hero499.webp";
    }

    console.log("Image changed to:", img.src);
  }

  // Run on page load
  updateHeroImage();

  // Run on resize
  window.addEventListener("resize", () => {
    updateHeroImage();
  });



  const testimonials = [
	{
	  Names: "Mandy G.",
	  location: "Chicago",
	  date: "May 6, 2023",
	  message: "I recently had the pleasure of working with Daniel and his team, and I couldn't be happier with the results!...",
	  imageUrl: "images/2.jpg"
	},
	{
		Names: "Daniel F. ",
		location: "Chicago",
		date: "May 3, 2024",
		message: "I recently hired Daniel to sell a lot in Arlington Heights. The experience was great! We were able to market...",
		imageUrl: "images/1.jpg"
	},
	{
		Names: "Patty D.",
		location: "Lima, Peru",
		date: "Dec 6, 2024",
		message: "Daniel and his team helped me to sell my property in Mundelein. With his help we were able to sell it for more than...",
		imageUrl: "images/2.jpg"
	},
	{
		Names: "Steven C",
		location: "Canada",
		date: "Jun 18, 2024",
		message: "Daniel helped us to buy this home while selling my wife's condo. Daniel did a great job showing us...",
		imageUrl: "images/1.jpg"
	},
	{
		Names: "Veronica L.",
		location: "Chicago",
		date: "Jan 20, 2024",
		message: "I recently had the pleasure of working with Daniel and his team, and I couldn't be happier with the results!...",
		imageUrl: "images/2.jpg"
	},
	{
		Names: "George F.",
		location: "Dallas",
		date: "May 6, 2023",
		message: "I recently had the pleasure of working with German Llanos and his team, and I couldn't be happier with the results!...",
		imageUrl: "images/1.jpg"
	}
  ];

  function renderImages(data) {
    const mygrid = document.getElementById("testimonials-list");
    mygrid.innerHTML = ""; // Clear previous content
    data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("testimonial-box");
        card.innerHTML = `
			<div class='testimonial-header'>
            	<img src="${item.imageUrl}" alt="${item.templeName}" loading="lazy">
				<div class='client-info'>
					<h3>${item.Names}</h3>
					<p class='location'>${item.location}</p>
				</div>
				
			</div>
			<div class="testimonial-content">
      			<p>${item.message}</p>
				<span class='date'> ${item.date}</span>
    		</div>

        `;
        mygrid.appendChild(card);
    });
}

renderImages(testimonials);







