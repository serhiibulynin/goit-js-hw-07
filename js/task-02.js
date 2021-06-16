const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients')

const ingridientsElems = ingredients.map(ingridient => {
    const ingrdientElem = document.createElement('li');
    ingrdientElem.textContent = ingridient;
    return ingrdientElem;
});

list.append(...ingridientsElems);