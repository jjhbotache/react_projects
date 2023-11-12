const VITE_PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_API_KEY

export async function getImg(query) {
    const fetchInfo = await fetch(`https://pixabay.com/api/?key=${VITE_PIXABAY_API_KEY}&lang=en&q=${query}`)
    const data = await fetchInfo.json()
    const random = Math.floor(Math.random() * data.hits.length);
    const pic = data.hits[random].largeImageURL;
    return pic;
}