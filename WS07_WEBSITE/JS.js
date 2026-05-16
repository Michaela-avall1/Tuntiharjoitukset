var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  const warningAlert = document.getElementById("formAlert");
  const successAlert = document.getElementById("successAlert");

  warningAlert.classList.add("d-none");
  successAlert.classList.add("d-none");

  if (!name || !email) {
    warningAlert.classList.remove("d-none");
  } else {
    successAlert.classList.remove("d-none"); // show success + image
  }
});
