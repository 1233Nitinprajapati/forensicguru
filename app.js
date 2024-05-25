let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.opacity = "1";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function slide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slideIndex += n;
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  slides[slideIndex-1].style.opacity = "1";
}

//cliente
  