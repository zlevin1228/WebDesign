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




  $(document).ready(function() {
    $('.w2').css({
      'background-color': '#808080'
    })
    $('.w3').css({
      'background-color': '#808080'
    })

    $('.w2').on('mouseenter', function() {
      $('.w2').css({
        'background-color': '#BB67A3'
      })  
    }).on('mouseleave', function() {
      $('.w2').css({
        'background-color': '#808080'
      })
    })

    $('.w3').on('mouseenter', function() {
      $('.w3').css({
        'background-color': '#46A9D3'
      })  
    }).on('mouseleave', function() {
      $('.w3').css({
        'background-color': '#808080'
        
      })
    })
    
$('.w1').on('click', function(){
  $(':root').css({'--current-color': '#EC3963'})
})

$('.w2').on('click', function(){
  $(':root').css({'--current-color': '#BB67A3'});
  $('.w1').css({
    'background-color': '#808080'
  });
  $('.w2').css({
    'background-color': '#BB67A3'
  });
  $('.w3').css({
    'background-color': '#808080'
  })
})

$('.w3').on('click', function(){
  $(':root').css({'--current-color': '#46A9D3'});
  
})



  })

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}