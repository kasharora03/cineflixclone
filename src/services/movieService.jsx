const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const endpoints={
    now_playing:`${baseUrl}/movie/now_playing?api_key=${key}`,
    popular: `${baseUrl}/movie/popular?api_key=${key}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
    trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy: `${baseUrl}/discover/movie?api_key=${key}&with_genres=35`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
}

export function createimgURL(path, size){
    return `https://image.tmdb.org/t/p/${size}/${path}`;
}
export default endpoints;