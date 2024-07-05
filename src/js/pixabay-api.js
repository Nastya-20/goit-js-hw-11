const apiKey = '44783480-725b805b80ef605c474d620ee';

export function searchImages(query) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.hits) // Повернути масив зображень
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}


