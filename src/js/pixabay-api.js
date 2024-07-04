const apiKey = '44783480-725b805b80ef605c474d620ee';

export async function searchImages(query) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.hits; // Повертаємо масив зображень
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}

