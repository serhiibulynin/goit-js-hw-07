const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const incrementBtn  = document.querySelector('#counter button[data-action="increment"]');
const decrementBtn  = document.querySelector('#counter button[data-action="decrement"]');
const valueEl = document.querySelector('#value');

incrementBtn.addEventListener('click', onIncrementClick);

function onIncrementClick(event) {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
}

decrementBtn.addEventListener('click', onDecrementClick);

function onDecrementClick(event) {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
}