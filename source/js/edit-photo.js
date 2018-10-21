var labels = document.querySelectorAll('.add-edit__item');

function active() {
    if (this.classList.contains('add-edit__item--active')) {
        return
    } else {
        for (var i = 0; i < labels.length; i++) {
            labels[i].classList.remove('add-edit__item--active');
            this.classList.add('add-edit__item--active');
        }
    }
}

for (var i = 0; i < labels.length; i++) {
    labels[i].addEventListener('change', active);
    labels[i].addEventListener('click', active)
}

var inputs = document.querySelectorAll('.add-edit__input');
var photo = document.querySelector('.add-edit__photo');
var cancelBtn = document.querySelector('.add-edit__btn--cancel');

var brightnessValue = 'brightness(100%)';
var saturateValue = 'saturate(100%)';
var contrastValue = 'contrast(100%)';

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function () {
        var filterType = this.id.substr(5);
        var filterValue = '' + filterType + '(' + this.value + '%)';
        if (filterType == 'brightness') {
            brightnessValue = filterValue;
        } else if (filterType == 'saturate') {
            saturateValue = filterValue;
        } else if (filterType == 'contrast') {
            contrastValue = filterValue;
        }
        photo.style.filter = brightnessValue + ' ' + saturateValue + ' ' + contrastValue;
    })
}

cancelBtn.addEventListener('click', function() {
    photo.style.filter = 'none';
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = 100;
        brightnessValue = 'brightness(100%)';
        saturateValue = 'saturate(100%)';
        contrastValue = 'contrast(100%)';
    }
})
