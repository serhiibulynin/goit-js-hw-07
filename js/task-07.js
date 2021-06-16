const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.input.addEventListener('input', onInput);

function onInput(event) {
    const input = event.target;
    refs.text.style.fontSize = input.value + 'px';
}

