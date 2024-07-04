const API_KEY = '44783480-725b805b80ef605c474d620ee';
const BASE_URL = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true`;

export async function fetchImages(query) {
  const response = await fetch(`${BASE_URL}&q=${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  const data = await response.json();
  return data.hits;
}
