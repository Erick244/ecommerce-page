const burguerMenu = document.querySelector('.burguerMenu');
const cartPopup = document.querySelector('.cartPopup');

document.getElementById('burguerIcon').onclick = () => {
    cartPopup.classList.add('hide');
    burguerMenu.classList.remove('hide');
    burguerMenu.classList.remove('hideMenuAnimation');
    document.body.style.overflowY = 'hidden';
}

document.querySelector('.cart').onclick = () => {
    cartPopup.classList.toggle('hide');
}

document.querySelector('.closeMenu').onclick = () => {
    closeMenu();
}

document.querySelector('.burguerMenu').onclick = function (e) {
    if (e.target == this) {
        closeMenu();
    }
}

function closeMenu() {
    document.body.style.overflowY = 'visible';
    burguerMenu.classList.add('hideMenuAnimation');
    setTimeout(() => {
        burguerMenu.classList.add('hide');
    }, 500)
}
