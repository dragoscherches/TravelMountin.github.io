
var menu = document.querySelector(".menu-toggle")
var nav = document.getElementById("nav");

menu.addEventListener("click", function(){
	nav.classList.toggle("active");
});