// CODE FOR QUOTE SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
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

 // Call the function to advance the slideshow
 window.onload = function (event) {
    setInterval(function () {
      plusSlides(1);
    }, 7500);
  };

  // GALLERY HOVER JQUERY
  $(document).ready(function() {
    $('.website').on('mouseenter', function() {
      $(this).find('.webDescription').fadeIn()
    }).on('mouseleave', function() {
      $('webDescription').fadeOut()
    })

  })