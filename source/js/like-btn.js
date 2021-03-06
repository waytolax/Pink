var likeOutputs = document.querySelectorAll('.gallery__like-output');
var likeBtns = document.querySelectorAll('.gallery__like-btn');

var likeObj = {
    1: 215,
    2: 356,
    3: 666,
    4: 215,
    5: 4,
    6: 150,
    7: 2560
}

for (var i = 0; i < likeBtns.length; i++) {
    likeOutputs[i].value = likeObj[i + 1];
    likeBtns[i].addEventListener('click', function() {
        if (likeBtns[this.id - 1].classList.contains('gallery__like-btn--liked')) {
            likeObj[this.id] -= 1;
            likeOutputs[this.id - 1].value = likeObj[this.id];
            likeBtns[this.id - 1].classList.remove('gallery__like-btn--liked');
        } else {
            likeObj[this.id] += 1;
            likeOutputs[this.id - 1].value = likeObj[this.id];
            likeBtns[this.id - 1].classList.add('gallery__like-btn--liked');
        }
    })
};
