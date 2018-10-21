var priceControls = document.querySelector('.price-controls');
var priceControlsItems = document.querySelectorAll('.price-controls__item');
var table = document.querySelector('.price-table__container');

priceControls.classList.remove('controls--nojs');

priceControls.addEventListener('click', function() {
    for (var i = 0; i < priceControlsItems.length; i++) {
        if (priceControlsItems[0].checked) {
            table.style.transform = 'translateX(-16%)';
        } else if (priceControlsItems[2].checked) {
            table.style.transform = 'translateX(-83%)';
        } else {
            table.style.transform = 'translateX(-50%)';
        }
        setTimeout(function() {
            table.style.transform = 'translateX(-50%)';
            priceControlsItems[1].checked = true;
        }, 5000);
    }
});
