var slideIndex = 0;
showSlides();
var timer = null;

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("mini-img");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }    

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 10000);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  clearTimeout(timer);
}

function menu(x) {
  x.classList.toggle("change");
}