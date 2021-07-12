let contactsButton = document.querySelector('.contacts-text .button');
let popup = document.querySelector('.modal-email');
let focusImput = popup.querySelector('[name=name]');
let buttonClose = popup.querySelector('.button-close');


contactsButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove('visually-hidden');
    focusImput.focus();
});

buttonClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add('visually-hidden');
});

window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
        if (!popup.classList.contains('visually-hidde')) {
            evt.preventDefault();
            popup.classList.add('visually-hidden')
        }
    }
});