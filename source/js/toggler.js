var togglerBlock = document.querySelector(".page-header__logo-btn");
var togglerBtn = document.querySelector(".page-header__toggler");
var mainNav = document.querySelector('.main-nav')

togglerBlock.classList.remove("page-header__logo-btn--no-js");

togglerBtn.addEventListener('click', function () {
togglerBlock.classList.toggle('page-header__logo-btn--opened');
mainNav.classList.toggle('main-nav--opened');
})
