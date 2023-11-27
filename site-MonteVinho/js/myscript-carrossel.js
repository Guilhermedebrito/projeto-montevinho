
/* Menu */

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 900) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    } 
}

/* Carrossel de imagens */

const carousel = document.querySelector('.carousel-inner');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragEnd);
carousel.addEventListener('mousemove', drag);
carousel.addEventListener('mouseleave', dragEnd);
carousel.addEventListener('touchstart', dragStart);
carousel.addEventListener('touchend', dragEnd);
carousel.addEventListener('touchmove', drag);

function dragStart(e) {
  if (e.type === 'touchstart') {
    startPosition = e.touches[0].clientX;
  } else {
    startPosition = e.clientX;
  }
  isDragging = true;
}

function drag(e) {
  if (isDragging) {
    let currentPosition;
    if (e.type === 'touchmove') {
      currentPosition = e.touches[0].clientX;
    } else {
      currentPosition = e.clientX;
    }
    currentTranslate = prevTranslate + currentPosition - startPosition;
  }
}

function dragEnd() {
  prevTranslate = currentTranslate;
  isDragging = false;
}

function updateCarouselPosition() {
  carousel.style.transform = `translateX(${currentTranslate}px)`;
}

setInterval(updateCarouselPosition, 100);



