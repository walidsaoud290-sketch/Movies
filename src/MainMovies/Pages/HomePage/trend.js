let holder = document.querySelectorAll('.trending-card-movie-item')[0],
  cards = document.querySelectorAll('.card-image');

let preActiveCard = cards[1];
let nextActiveCard = cards[2];

function scrollLeft() {
  holder.classList.remove('next');
  holder.classList.remove('reset');
  holder.classList.add('next');
  
  preActiveCard.classList.remove('active');
  nextActiveCard.classList.add('active');
  setTimeout(reset, 600);
}

function reset() {
  holder.classList.remove('next');
  holder.classList.add('reset');
  preActiveCard.classList.add('active');
  nextActiveCard.classList.remove('active');
}

setInterval(scrollLeft, 1500);

