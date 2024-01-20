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

