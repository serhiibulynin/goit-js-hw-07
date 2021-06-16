const refs = {
    greate: document.querySelector('button[data-action="render"]'),
    destroy: document.querySelector('button[data-action="destroy"]'),
    input: document.querySelector('input'),
    boxes: document.querySelector('#boxes'),
}

refs.input.addEventListener('input', onInput);
refs.greate.addEventListener('click', createBoxes);
refs.destroy.addEventListener('click', destroyBoxes);

let amount = 0;

function onInput(event) {
    const inputEl = event.target;
    amount = +inputEl.value;
};

function createBoxes() {
    const divArr = []
    let size = 30;
    for (let i = 0; i < amount; i++) { 
        const divEl = document.createElement('div');
        // divEl.classList.add("item")
        divEl.style.width = size + 'px';
        divEl.style.height = size + 'px';
        divEl.style.backgroundColor = `rgb(${randomNum(0, 256)}, ${randomNum(0, 256)}, ${randomNum(0, 256)})`;
        divArr.push(divEl)
        size += 10;
    }
    refs.boxes.append(...divArr);
}

function destroyBoxes() {
    // for (let i = 0; i < amount; i++) {
    //     const divs = refs.boxes.querySelector('.item');
    //     refs.boxes.removeChild(divs);
    // }
    refs.boxes.innerHTML = '';
}

const randomNum = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
};



