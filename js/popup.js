let contactsButton = document.querySelector('.contacts-text .button');
let popup = document.querySelector('.modal');
let focusImput = popup.querySelector('[name=name]');
let buttonClose = popup.querySelector('.button-close');
let loginForm = popup.querySelector('.email-form');
let loginName = popup.querySelector(".login-name");
let loginEmail = popup.querySelector(".login-email");
let loginText = popup.querySelector('.login-text');


contactsButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    focusImput.focus();
});

buttonClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove("modal-error");
});

window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
        if (popup.classList.contains('modal-show')) {
            evt.preventDefault();
            popup.classList.remove('modal-show');
            popup.classList.remove("modal-error");
        }
    }
});

loginForm.addEventListener("submit", function (evt) {
    if (!loginName.value || !loginEmail.value || !loginText.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});
