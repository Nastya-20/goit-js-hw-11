import SimpleLightbox from 'simplelightbox';

export function renderImages(images) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  if (images.length === 0) {
    showNoResultsMessage();
    return;
  }

  const lightbox = new SimpleLightbox('.gallery a');

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;
    
    const linkElement = document.createElement('a');
    linkElement.href = image.largeImageURL;
    linkElement.appendChild(imgElement);
    
    gallery.appendChild(linkElement);
  });

  lightbox.refresh();
}

function showNoResultsMessage() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '<p>Sorry, there are no images matching your search query. Please try again!</p>';
}

