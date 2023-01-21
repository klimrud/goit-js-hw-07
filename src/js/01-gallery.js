import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
// console.log(...galleryItems)

const container = document.querySelector('.gallery');

function imageGelleryMarkup(galleryItem) {
    return  galleryItem.map( ({preview, original, description}) =>{
    return `<div class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img
                 class="gallery__image"
                 src="${preview}"
                 data-source="${original}"
                 alt="${description}"
                />
             </a>
           </div>`;
  }).join('');
  
};
// console.log();
// console.log()
container.insertAdjacentHTML('beforeend', imageGelleryMarkup(galleryItems) )
//  console.log()

console.log(container);

container.addEventListener( 'click', getGallery );

function getGallery(){

};