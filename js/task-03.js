const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListRef = document.querySelector('#gallery')

const lisMarkup = images.map(image => 
    `<li style='list-style : none'><img src="${image.url} alt="${image.alt}"  width='300px'</li>`
).join("")

galleryListRef.insertAdjacentHTML('afterbegin', lisMarkup)
galleryListRef.setAttribute("style", "display : flex");

const galleryItemRef = document.querySelectorAll('#gallery li')
galleryListRef.setAttribute("style", "flex-blasis : calc((100% - 30px) / 3)");



//  const lisMarkup = images.reduce(
//   (acc, image) =>
//     acc +
//     `
//   <li>
//     <img src="${image.url} alt="${image.alt}"
//   </li>`,
//   '',
// );

// console.log(lisMarkup);

// galleryListRef.innerHTML = lisMarkup;
