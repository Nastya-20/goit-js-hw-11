import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('search-input');
const loader = document.querySelector('.loader');
const gallery = document.getElementById('gallery');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.'
    });
    return;
  }

  showLoader(); // Показати завантажувач перед запитом
  searchImages(query)
    .then(images => {
      renderImages(images); // Відобразити зображення в галереї

      // Очистити input після успішного пошука та рендерінга зображень
      searchInput.value = '';
    })
    .catch(error => {
      console.error('Error searching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.'
      });
    })
    .finally(() => {
      hideLoader(); // Приховати завантажувач після завершення запиту (незалежно від результату)
    });
});

function showLoader() {
  loader.style.display = 'block';
  gallery.innerHTML = ''; // Очистити галерею перед показом нових зображень
}

function hideLoader() {
  loader.style.display = 'none';
}
