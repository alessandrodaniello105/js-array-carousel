/* 2.
*/

const arrayImgs = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];
console.log(arrayImgs.length);

const itemsCollector = document.querySelector('.items-wrapper');
const btnPrev = document.querySelector('.up');
const btnNext = document.querySelector('.down');

for (let i = 0; i < arrayImgs.length; i++ ) {
  let image = arrayImgs[i];
  itemsCollector.innerHTML = `<img src="${image}" class="hide item">`;
  console.log(itemsCollector.innerHTML);
};



btnNext.addEventListener('click', function(){
  
});
