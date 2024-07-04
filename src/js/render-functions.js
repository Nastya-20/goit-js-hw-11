import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a');

export function renderImages(images) {
    const galleryElement = document.getElementById('gallery');
    galleryElement.innerHTML = ''; // Clear previous results

    if (images.length === 0) {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
    }

    const imageElements = images.map(image => `
        <div class="card">
            <a href="${image.largeImageURL}" data-lightbox="gallery">
                <img src="${image.webformatURL}" alt="${image.tags}">
            </a>
            <div class="card-info">
                <p>Likes: ${image.likes}</p>
                <p>Views: ${image.views}</p>
                <p>Comments: ${image.comments}</p>
                <p>Downloads: ${image.downloads}</p>
            </div>
        </div>
    `);

    galleryElement.innerHTML = imageElements.join('');
    lightbox.refresh(); // Refresh SimpleLightbox after adding new images
}

