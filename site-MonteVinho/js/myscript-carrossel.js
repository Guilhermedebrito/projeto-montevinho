
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

const carrossel = document.querySelector('.carrossel');
const carrosselItems = document.querySelectorAll('.carrossel-item');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % carrosselItems.length;
    updatecarrossel();
}

function updatecarrossel() {
    const translateX = -currentIndex * 600; 
    carrossel.style.transform = `translateX(${translateX}px)`;
}


setInterval(nextSlide, 3000); 



