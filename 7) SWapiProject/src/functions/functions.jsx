const VITE_PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_API_KEY

export async function getImg(query) {
    const fetchInfo = await fetch(`https://pixabay.com/api/?key=${VITE_PIXABAY_API_KEY}&lang=en&q=${query}`)
    const data = await fetchInfo.json()
    const random = Math.floor(Math.random() * data.hits.length);
    const pic = data.hits[random].largeImageURL;
    return pic;
}

export function getIdFromLink(link) {
    // Utilizando expresiones regulares para extraer el último número del enlace
    const match = link.match(/\/(\d+)\/?$/);
    
    // Verificar si se encontró un resultado
    if (match) {
      // El ID estará en la posición 1 del array de coincidencias
      const id = match[1];
      return id;
    } else {
      // Retornar null si no se encuentra ningún número al final del enlace
      return null;
    }
  }