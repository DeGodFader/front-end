import env from "./env.json"

export const TMDB_API_KEY= "e27080b8846ea0649828f7f75df3f4a4"
export const TMDB_IMAGE_BASE_PATH="http://image.tmdb.org/t/p/w500/"
export const TMDB_SEARCH_MOVIE_PATH="https://api.themoviedb.org/3/movie/"
export const TMDB_SEARCH_SERIE_PATH="https://api.themoviedb.org/3/tv/"
export const TMDB_DISCOVER_MOVIE_PATH="https://api.themoviedb.org/3/discover/movie?api_key="+TMDB_API_KEY
export const TMDB_DISCOVER_SERIES_PATH="https://api.themoviedb.org/3/discover/tv?api_key="+TMDB_API_KEY
export const TMDB_TRENDING_PATH="https://api.themoviedb.org/3/trending/all/day?api_key="+TMDB_API_KEY
export const TMDB_POPULAR_MOVIE_PATH="https://api.themoviedb.org/3/movie/popular?api_key="+TMDB_API_KEY
export const TMDB_POPULAR_SERIES_PATH="https://api.themoviedb.org/3/tv/popular?api_key="+TMDB_API_KEY
export const TMDB_TRAILER_VIDEO_PATH="https://www.youtube.com/watch?v="