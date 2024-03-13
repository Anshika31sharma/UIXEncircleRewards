// script.js

function showSilverInfo() {
  var silverImage = document.getElementById('silver-image');
  var silverText = document.querySelector('.silver');
  var goldImage = document.getElementById('gold-image');
  var goldText = document.querySelector('.gold');

  silverImage.style.display = 'block';
  silverText.classList.add('clicked');
  goldImage.style.display = 'none';
  goldText.classList.remove('clicked');
}

function showGoldInfo() {
  var silverImage = document.getElementById('silver-image');
  var silverText = document.querySelector('.silver');
  var goldImage = document.getElementById('gold-image');
  var goldText = document.querySelector('.gold');

  goldImage.style.display = 'block';
  goldText.classList.add('clicked');
  silverImage.style.display = 'none';
  silverText.classList.remove('clicked');
}
const cardsContainer = document.querySelector(".card-carousel");
const cardsController = document.querySelector(".card-carousel + .card-controller")

class DraggingEvent {
  constructor(target = undefined) {
    this.target = target;
  }
  
  event(callback) {
    let handler;
    
    this.target.addEventListener("mousedown", e => {
      e.preventDefault()
      
      handler = callback(e)
      
      window.addEventListener("mousemove", handler)
      
      document.addEventListener("mouseleave", clearDraggingEvent)
      
      window.addEventListener("mouseup", clearDraggingEvent)
      
      function clearDraggingEvent() {
        window.removeEventListener("mousemove", handler)
        window.removeEventListener("mouseup", clearDraggingEvent)
      
        document.removeEventListener("mouseleave", clearDraggingEvent)
        
        handler(null)
      }
    })
    
    this.target.addEventListener("touchstart", e => {
      handler = callback(e)
      
      window.addEventListener("touchmove", handler)
      
      window.addEventListener("touchend", clearDraggingEvent)
      
      document.body.addEventListener("mouseleave", clearDraggingEvent)
      
      function clearDraggingEvent() {
        window.removeEventListener("touchmove", handler)
        window.removeEventListener("touchend", clearDraggingEvent)
        
        handler(null)
      }
    })
  }
  
}
let slideIndex = 1;
showSlide(slideIndex);

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
