var main = document.getElementsByClassName("main")[0],
		slides = document.getElementsByClassName("slide"),
		prev = document.getElementsByClassName("prev")[0],
		next = document.getElementsByClassName("next")[0],
		slidernav = document.getElementsByClassName("nav-dot"),
		current = 0,
		percentages = [0, 15, 26, 39, 53, 65, 82, 100, 100, 115];

		function sliderArrows(number) {
	scrollSlide(current += number);
}
function scrollSlide(number) {
	current = number;
	prev.style.display = "block";
	next.style.display = "block";
	if (number == 0)
		prev.style.display = "none";
	else if (number == slides.length -1)
		next.style.display = "none";
	for (var slide of slides) {
		slide.className = "slide";
	}
	slides[number].classList.add("current-slide");
	for(var i=0;i<slidernav.length;i++){ 
		slidernav[i].classList.remove("current-dot");
	}
	slidernav[number].classList.add("current-dot");
	main.style.backgroundPosition = percentages[number] + "%";
	if (number == 9)
		slides[9].classList.add("final-slide");
}
window.onload = function() {
	prev.addEventListener("click", function() {
		sliderArrows(-1);
	}, false);
	next.addEventListener("click", function() {
		sliderArrows(1);
	}, false);
	for(var i=0;i<slidernav.length;i++){ 
		slidernav[i].addEventListener("click", function(e) {
			var slide = e.target.getAttribute("data-slide");;
			console.log(slide);
			scrollSlide(slide);
		}, false);
	}
};