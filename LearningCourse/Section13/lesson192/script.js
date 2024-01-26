'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnOpenModal.length; i++)
//   btnOpenModal[i].addEventListener('click', openModal);

btnOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////
//////////////////////////////////
/////////////////////////////////
/*
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('#section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
header.before(message);
// header.after(message);

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  // message.remove();
  message.parentElement.removeChild(message);
});
*/


/*
////////////////////////////////
// Styles, Attributes and Classes
//Styles
message.style.backgroundColor = '#37383d'; //=> inline style
message.style.width = '120%'; //=> inline style

console.log(message.style.height) // Không thể lấy ra style khi kho set nó bằng thuộc tính style trc đó
console.log(message.style.backgroundColor); //backgroundcolor có thể lấy ra dc vì đã dc set bằng style trc đó

console.log(getComputedStyle(message).color); //Cách lấy ra mọi thuộc tính
console.log(getComputedStyle(message).height); //Cách lấy ra mọi thuộc tính

message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.designer);

logo.alt = 'Beautiful minimalist logo';

// Non-standard --> Nếu không phải thuộc tính có sắn thì ta phải gọi getAttribute để lấy thuộc 
// tính đấy ra
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Banklist');

console.log(logo.src);
logo.getAttribute('src');

const link = querySelector('.nav__link-btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attribute
console.log(logo.dataset.versionNumber);

// Classes => nên dùng cách này
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c', 'j');
logo.classList.contains('c', 'j');

// Don't use => Bởi vì nó sẽ bị ghi đè nên tất cả các class đã tồn tại trên element này
logo.className = 'jonas';
*/


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll(X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  //Scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({behavior: 'smooth'});
});


/**
 * Sự khác nhau giữa addEventListener và .event() là addEventListenser cho phép
 * thêm nhiều sự kiện một lúc trong khi đó .event() chỉ thêm dc 1 sự kiện 1 lần
 * 
 */

///////////////////////////////
// Types of Events and Event Handlers
/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');

  // h1.removeEventListener('mouseenter', alertH1);
}

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// }
*/

// rgb(255,255,255)
const randomInt = (min, max) => Math.floor(Math.random() * (max-min+1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);

});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
}, true);



