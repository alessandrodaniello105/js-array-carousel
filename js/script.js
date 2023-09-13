/* 2.
*/

const arrayImgs = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];

const itemsCollector = document.querySelector('.items-wrapper');
const btnPrev = document.querySelector('.up');
const btnNext = document.querySelector('.down');

let counterImg = 0;

/* 4.
*/

for (let i = 0; i < arrayImgs.length; i++ ) {

  let image = arrayImgs[i];

  itemsCollector.innerHTML += `<img src="${image}" class="item">`;
    
  if (i === 0) document.querySelector('.item').classList.add('active');

};

const images = document.getElementsByClassName('item');


/* 6.
*/
console.log (counterImg);

btnNext.addEventListener('click', function(){
  
  if (counterImg < (arrayImgs.length - 1)) {

    images[counterImg].classList.remove('active'); 
  
    counterImg++;
    
    images[counterImg].classList.add('active');

  } else if (counterImg == (arrayImgs.length - 1)) {

    images[counterImg].classList.remove('active'); 

    counterImg = 0;

    images[counterImg].classList.add('active');

  }

});

// if(counterImg == arrayImgs.length) counterImg = 0;

btnPrev.addEventListener('click', function(){
  
  images[counterImg].classList.remove('active'); 
  
  counterImg--;
  
  images[counterImg].classList.add('active');

});

