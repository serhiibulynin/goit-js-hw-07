const categoriesListRef = document.querySelector("#categories");

const categoriesEl = categoriesListRef.children;

console.log(`В списке ${categoriesEl.length} категории.`);
console.log("---------------");

[...categoriesEl].forEach((category) => {
    const titleRef = category.querySelector('h2');
    const liElems = category.querySelectorAll('li');
    console.log(`Категория: ${titleRef.textContent}`)
    console.log(`Количество элементов: ${liElems.length}`)
})

