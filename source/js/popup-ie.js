var overlay = document.querySelector('.popup-overlay');
var popupIe = document.querySelector('.popup-ie');
var closeIeBtn = document.querySelector('.popup-ie__close-btn');

if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 1 {
      setTimeout(function () {
          overlay.style.display = 'block';
          popupIe.style.display = 'flex';
      }, 3000);

    closeIeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
        popupIe.style.display = 'none';
    })
