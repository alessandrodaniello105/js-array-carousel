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

let image = 0;

for (let i = 0; i < arrayImgs.length; i++ ) {
  image = arrayImgs[i];

  itemsCollector.innerHTML += `<img src="${image}" class="item">`;

  if (i === 0) document.querySelector('.item').classList.add('active');

};



const images = document.getElementsByClassName('item');

// document.querySelector('.item').classList.remove('hide');

btnNext.addEventListener('click', function(){
  console.log(image);
});

