function openNav() {
  document.getElementById("mySidenav").style.width = "15%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("slides2");
  let dot2s = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  for (i = 0; i < dot2s.length; i++) {
      dot2s[i].className = dot2s[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dot2s[slideIndex2-1].className += " active";
}