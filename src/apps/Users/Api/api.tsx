import { supabase } from "../../../Helpers/constants"
import LocalStorage from "../../../Helpers/storage"
import { APP_KEY, Node_Server, TMDB_API_KEY, TMDB_DISCOVER_MOVIE_PATH, TMDB_DISCOVER_SERIES_PATH, TMDB_POPULAR_MOVIE_PATH, TMDB_POPULAR_SERIES_PATH, TMDB_SEARCH_MOVIE_PATH, TMDB_SEARCH_SERIE_PATH, TMDB_TRENDING_PATH } from "../../../appEnv"

type UserPostsType={
    homepage: (id: string)=> Promise<{movies:{trending: Array<any>, popular: {movies: Array<any>, series: Array<any>}, discover: {movies: Array<any>, series: Array<any>}}, user:{watch_list: Array<any>, likes:Array<any>, history:Array<any>}, recommendations: Array<any>}>
    like:(id: string, movie:{id: number, name: string, genre_ids: Array<any>, poster_path})=>Promise<Array<any>>
    wishList:(id: string, movie:{id: number, name: string, genre_ids: Array<any>, poster_path})=>Promise<Array<any>>
    history:(id: string, movie:{id: number, name: string, genre_ids: Array<any>, poster_path})=>Promise<Array<any>>
    searchMovie:(word: string)=>Promise<Array<any>>
}

const UserPost: UserPostsType={
    homepage: async()=>{return {movies:{trending: [], popular: {movies: [], series:  []}, discover:{movies: [], series:  []}}, recommendations: [], user:{watch_list: [], likes:[], history:[]}}},
    //@ts-ignore
    like: async(id: string, movie:{id: number, name: string, genre_ids: Array<any>, poster_path})=>{ return []},
    //@ts-ignore
    wishList: async(id: string, movie:{id: number, name: string, genre_ids: Array<any>, poster_path})=>{ return []},
    //@ts-ignore
    history: async(id: string, movie:{id: number, name: string, genre_ids: Array<any>, poster_path})=>{ return []},
    //@ts-ignore
    searchMovie: async(word: string)=>{return []},
}


const header={
    "Content-Type": "application/json",
    "app_key": APP_KEY,
    "authorization": LocalStorage.getAccessToken()
}


UserPost.homepage= async(id: string)=>{
    const response = await fetch(
        `${Node_Server}/${id}`,
        {
            method: "GET",
            headers: header,
        }
    )
    const data2 = await response.json()
    return data2
}


//@ts-ignore
UserPost.like= async(id: number,  movie:{id: string, name: string, genre_ids: Array<any>, poster_path: string})=>{
    const { data, error}= await supabase
        .from('users')
        .select('likes')
        .eq('id', id)
        .single()

    if(error) throw error

    const likes: Array<typeof movie>= data.likes

    if(likes.find(like=> like.id===movie.id)){
        return likes
    }
    const update= [...likes, movie]

    const {data: updatedData, error: updatedError}= await supabase
        .from('users')
        .update({
            likes: update
        })
        .eq('id', id)
        .select()

    if(updatedError) throw error


    return updatedData[0].likes
}

//@ts-ignore
UserPost.wishList= async(id: number,  movie:{id: string, name: string, genre_ids: Array<any>, poster_path: string})=>{
    const { data, error}= await supabase
        .from('users')
        .select('watch_list')
        .eq('id', id)
        .single()

    if(error) throw error

    const watch_list: Array<typeof movie>= data.watch_list

    if(watch_list.find(like=> like.id===movie.id)){
        return watch_list
    }
    const update= [...watch_list, movie]

    const {data: updatedData, error: updatedError}= await supabase
        .from('users')
        .update({
            watch_list: update
        })
        .eq('id', id)
        .select()

    if(updatedError) throw error
    return updatedData[0].likes
}

//@ts-ignore
UserPost.history= async(id: number,  movie:{id: string, name: string, genre_ids: Array<any>, poster_path: string})=>{
    const { data, error}= await supabase
        .from('users')
        .select('history')
        .eq('id', id)
        .single()

    if(error) throw error

    const history: Array<typeof movie>= data.history

    if(history.find(like=> like.id===movie.id)){
        return history
    }
    const update= [...history, movie]

    const {data: updatedData, error: updatedError}= await supabase
        .from('users')
        .update({
            history: update
        })
        .eq('id', id)
        .select()

    if(updatedError) throw error
    return updatedData[0].likes
}

//@ts-ignore
UserPost.searchMovie= async(word: string)=>{
    const response = await fetch(
        `${Node_Server}/search/${word}`,
        {
            method: "GET",
            headers: header,
        }
    )
    const data2 = await response.json()
    return data2
}


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
    return data2
}


export default UserPost