import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function imageGelleryMarkup(galleryItem) {
    return  galleryItem.map( ({preview, original, description}) =>{
    return `<li>
              <a class="gallery__item" href="${original}">
                <img
                 class="gallery__image"
                 src="${preview}"
                 data-source="${original}"
                 alt="${description}"
                />
             </a>
             </li>`;
  }).join('');
  
};
// console.log();
 
galleryEl.insertAdjacentHTML('beforeend', imageGelleryMarkup(galleryItems) )
console.log(galleryEl)