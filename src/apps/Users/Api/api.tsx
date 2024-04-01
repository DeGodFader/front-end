import { TMDB_API_KEY, TMDB_DISCOVER_MOVIE_PATH, TMDB_DISCOVER_SERIES_PATH, TMDB_POPULAR_MOVIE_PATH, TMDB_POPULAR_SERIES_PATH, TMDB_SEARCH_MOVIE_PATH, TMDB_SEARCH_SERIE_PATH, TMDB_TRENDING_PATH } from "../../../appEnv"

export const FetchTrending= async(page: number)=>{
    const response = await fetch(
        `${TMDB_TRENDING_PATH}&page=${page}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    )
    const data2 = await response.json()
    console.log(data2)
    return data2
}

export const FetchDiscoverMovies= async(page: number)=>{
    const response = await fetch(
        `${TMDB_DISCOVER_MOVIE_PATH}&page=${page}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    )
    const data2 = await response.json()
    console.log(data2)
    return data2
}
export const FetchDiscoverSeries= async(page: number)=>{
    const response = await fetch(
        `${TMDB_DISCOVER_SERIES_PATH}&page=${page}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    )
    const data2 = await response.json()
    console.log(data2)
    return data2
}

export const FetchPopularSeries= async(page: number)=>{
    const response = await fetch(
        `${TMDB_POPULAR_SERIES_PATH}&page=${page}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    )
    const data2 = await response.json()
    console.log(data2)
    return data2
}

export const FetchPopularMovies= async(page: number)=>{
    const response = await fetch(
        `${TMDB_POPULAR_MOVIE_PATH}&page=${page}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    )
    const data2 = await response.json()
    console.log(data2)
    return data2
}

export const FetchMovie= async(id: number | string)=>{
    const response = await fetch(
        `${TMDB_SEARCH_MOVIE_PATH}/${id}?api_key=${TMDB_API_KEY}&append_to_response=images,reviews,videos,credits`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    )
    const data2 = await response.json()
    console.log(data2)
    return data2
}

export const FetchSerie= async(id: number | string)=>{
    const response = await fetch(
        `${TMDB_SEARCH_SERIE_PATH}/${id}?api_key=${TMDB_API_KEY}&append_to_response=images,reviews,videos,credits`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    )
    const data2 = await response.json()
    console.log(data2)
    return data2
}


