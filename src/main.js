import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search term.',
        });
        return;
    }

    try {
        document.body.classList.add('loading');
        const images = await fetchImages(searchTerm);
        renderImages(images);
    } catch (error) {
        console.error('Error searching images:', error);
        iziToast.error({
            title: 'Error',
            message: 'Failed to fetch images. Please try again later.',
        });
    } finally {
        document.body.classList.remove('loading');
    }
});

