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