const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
    const input = event.target;
    
    if (input.value.length === +inputRef.dataset.length) {
        setClass('valid', 'invalid');
    } else
        setClass('invalid', 'valid');        
});

function setClass(newClass, oldClass) {
    inputRef.classList.add(newClass);
    inputRef.classList.remove(oldClass);    
}