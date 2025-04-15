const services = [
	{
	  Name: "websites",
	  title: "Web Sites & Design",
	  text: "The website that you need, totally modern, with all the necessary characteristics according to your business. You can choose the design until you are 100% satisfied. Adaptable to all phone, tablets and web browsers Image by www.freepik.es",
	  imageUrl: "images/PubliWebSite.png"
	},
	{
		Name: "development",
		title: "Web Development	",
		text: "We develop the application you need for your company. Whether you need to keep a new database for clients. create online exam for your workers or inventory and billing control, etc. We make it happen! Image by pikisuperstar www.freepik.es",
		imageUrl: "images/WebDevelopment.png"
	},
	{
		Name: "domainhosting",
		title: "Domain name & Web Hosting",
		text: "We offer hosting according to your needs on the best servers in the USA. In the same way, we advise you to find the domain and backups you need for your company.<br> Image by macrovector www.freepik.es<br>",
		imageUrl: "images/HostingDomain.png"
	}
  ];


  function renderImages(dataserv) {
    const mygridserv = document.getElementById("services-list");
    mygridserv.innerHTML = ""; // Clear previous content
    dataserv.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("service-box");
        card.innerHTML = `
			<img src="${item.imageUrl}" alt="${item.title}" loading="lazy">
			<div class='service-header'>
                <h3>${item.title}</h3>
				<div class='service-text'>
					<p>${item.text}</p>
				</div>
				
			</div>
			<div class="service-button">
				<button class="button_s" onclick="contact('${item.title}')">Start now</button>
    		</div>

        `;
        mygridserv.appendChild(card);
    });
}

renderImages(services);


function contact(name) {
    localStorage.setItem("servicename", name);
    window.location.href = "contact.html";

    // Optional: Confirm it worked
    //alert("Saved " + name + " to localStorage!");
  }

function cta_contact(name){
    if (name == 'empty'){
        localStorage.setItem("servicename", '');

    }

    window.location.href = "contact.html";
}

