var popup = document.querySelector('.form-popup--success');
var form = document.querySelector('.form');
var closeBtn = document.querySelector('.form__button--close');

form.addEventListener('submit', function(event) {
    event.preventDefault(event);
    popup.style.display = 'block';
    popup.scrollIntoView();
    closeBtn.focus();
})
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 1000);
})
