// Adicionar items ao carrinho

let quant = 1;

document.getElementById('minus').onclick = () => {
    if (quant != 1) {
        quant--;
        display();
    }
}

document.getElementById('plus').onclick = () => {
    if (quant < 10) {
        quant++;
        display();
    }
}

function display() {
    const span = document.querySelector('.containerQuantBtns > span');
    span.innerHTML = quant;
}

const something = document.querySelector('.something');
const empty = document.querySelector('.empty');
const quantItens = document.querySelector('.quantItens');

document.querySelector('.addCart').onclick = () => {
    something.classList.remove('hide');
    empty.classList.add('hide');
    calculateItems();
}

function calculateItems() {
    document.querySelector('.quantProd')
        .innerHTML = `x ${quant}`;

    const total = quant * 125;
    document.querySelector('.totalProd')
        .innerHTML = `$${total.toFixed(2)}`;

    quantItens.classList.remove('hide');
    quantItens.innerHTML = quant;

}

document.querySelector('.deleteProduct').onclick = () => {
    deleteItem();
}

function deleteItem() {
    something.classList.add('hide');
    empty.classList.remove('hide');
    quantItens.classList.add('hide');
}