const ref = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}

const defaultTextOutput = ref.output.textContent;

ref.input.addEventListener('input', onInput);

function onInput(event) {
    const input = event.currentTarget;
    ref.output.textContent = input.value ? input.value : defaultTextOutput;
}
