import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function initializeLightbox() {
    lightbox = new SimpleLightbox('.gallery a');
}

export function refreshLightbox() {
    if (lightbox) {
        lightbox.refresh();
    }
}

export function renderImages(images) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  if (images.length === 0) {
    showNoResultsMessage();
    return;
  }

  const markup = images.map(image => {
    return `
   <a href="${image.largeImageURL}" class="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}">
        <div class="info">
          <p>Likes: <span class="number">${image.likes}</span></p>
          <p>Views: <span class="number">${image.views}</span></p>
          <p>Comments: <span class="number">${image.comments}</span></p>
          <p>Downloads: <span class="number">${image.downloads}</span></p>
        </div>
      </a>
    `;
  }).join('');
  gallery.innerHTML = markup;
}

function showNoResultsMessage() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '<p>Sorry, there are no images matching your search query. Please try again!</p>';
}

