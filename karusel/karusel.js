/////////////////////
// DOM Elements
/////////////////////

var karuselWrapper = document.querySelector('#karusel');
var karuselTrack = document.querySelector('#karusel div');
var prevBtn = document.createElement('BUTTON');
var nextBtn = document.createElement('BUTTON');
var imageSample = document.querySelector('#karusel img');
var imageWidth;

karuselWrapper.appendChild(prevBtn);
karuselWrapper.appendChild(nextBtn);

/////////////////////
// CSS Prep
/////////////////////

karuselTrack.classList.add('karusel-track');
prevBtn.classList.add('karusel-prev');
nextBtn.classList.add('karusel-next');

var transformValue = -560;
karuselTrack.style.transform = `translateX(${transformValue}px)`;


/////////////////////
// Event handlers
/////////////////////

imageSample.addEventListener('load', function () {
  imageWidth = imageSample.width;
  karuselTrack.width = imageWidth; /* isso não funciona */
  return imageWidth;
}); /* por que isso só funciona sem declarar var? declarado lá em cima ao invés */

prevBtn.addEventListener('click', function () {
  transformValue = transformValue + imageWidth;
  karuselTrack.style.transform = `translateX(${transformValue}px)`;
  return transformValue;
});

nextBtn.addEventListener('click', function () {
  transformValue = transformValue - imageWidth;
  karuselTrack.style.transform = `translateX(${transformValue}px)`;
  return transformValue;
});