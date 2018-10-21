var controls = document.querySelector('.reviews-controls');
var controlsItems = document.querySelectorAll('.reviews-controls__item');
var reviews = document.querySelectorAll('.reviews__item');
var controlBtn = document.querySelectorAll('.reviews__btn');
var current = 0;

controls.classList.remove('controls--nojs');

function changeReview() {
    for (var i = 0; i < controlsItems.length; i++) {
        if (controlsItems[i].checked) {
            for (var j = 0; j < reviews.length; j++) {
                if (reviews[j].style.opacity = '1') {
                    reviews[j].style.opacity = '0';
                    reviews[j].style.transform = 'translatex(-100%)';
                }
            }
            reviews[(i + 1) % reviews.length].style.transform = 'translateX(100%)';
            reviews[i].style.left = '50%'
            reviews[i].style.transform = 'translateX(-50%)';
            reviews[i].style.opacity = '1';
        }
    }
}

controls.addEventListener('change', function() {
    changeReview();
});

for (var i = 0; i < controlBtn.length; i++) {
    controlBtn[i].classList.remove('reviews__btn--nojs')
    controlBtn[i].addEventListener('click', function() {
        if (this.classList.contains('reviews__btn--right')) {
            current++
            controlsItems[current % reviews.length].checked = true;
        } else {
            if (current == 0) {
                current = reviews.length;
            }
            current--
            controlsItems[current % reviews.length].checked = true;
        }
        changeReview();
    })
}
