import { createAsyncThunk } from "@reduxjs/toolkit";
import UserPost, { FetchDiscoverMovies, FetchDiscoverSeries, FetchMovie, FetchPopularMovies, FetchPopularSeries, FetchSerie, FetchTrending } from "../../Api/api";
import { notify } from "../../../../Helpers/functions";
import { likeAMovie } from "../reducers/resultReducer";


export const homePageAsync= createAsyncThunk(
    "homePageAsync",
    async(id: string)=>{
        try {
            const response: {movies:{trending: Array<any>, popular: {movies: Array<any>, series: Array<any>}, discover: {movies: Array<any>, series: Array<any>}}, user:{watch_list: Array<any>, likes:Array<any>, history:Array<any>}, recommendations: Array<any>}= await UserPost.homepage(id)
            return response
        } catch (error) {
            notify({type:"ERROR", message:"Try again", duration:3})
            console.log(error)
            return  {movies:{trending: [], popular: {movies: [], series:  []}, discover:{movies: [], series:  []}}, recommendations: [], user:{watch_list: [], likes:[], history:[]}}
        }
    }
)

export const fetchTrendingAsync=createAsyncThunk(
    "fetchTrendingAsync",
    async (page: number) => {
        try {
            const response= await FetchTrending(page)
            return response.results
        } catch (error) {
           notify({type:"ERROR", message:"Try again", duration:3})
            console.log(error)
            return []
        }
    }
)

export const fetchMovieAsync=createAsyncThunk(
    "fetchMovieAsync",
    async (id: number| string) => {
        try {
            const response= await FetchMovie(id)
            return response
        } catch (error) {
           notify({type:"ERROR", message:"Try again", duration:3})
            console.log(error)
            return {}
        }
    }
)

export const fetchSeriesAsync=createAsyncThunk(
    "fetchSeriesAsync",
    async (id: number| string) => {
        try {
            const response= await FetchSerie(id)
            return response
        } catch (error) {
           notify({type:"ERROR", message:"Try again", duration:3})
            console.log(error)
            return {}
        }
    }
)

export const fetchDiscoverAsync=createAsyncThunk(
    "fetchDiscoverAsync",
    async (page: number) => {
        try {
            const response= await FetchDiscoverMovies(page)
            const response2= await FetchDiscoverSeries(page)
            return {movies:response.results, series:response2.results}
        } catch (error) {
           notify({type:"ERROR", message:"Try again", duration:3})
            console.log(error)
            return {movies:[], series:[]}
        }
    }
)


export const fetchPopularMoviesAsync=createAsyncThunk(
    "fetchPopularMoviesAsync",
    async (page: number) => {
        try {
            const response= await FetchPopularMovies(page)
            const response2= await FetchPopularSeries(page)
            return {movies:response.results, series:response2.results}
        } catch (error) {
           notify({type:"ERROR", message:"Try again", duration:3})
            console.log(error)
            return {movies:[], series:[]}
        }
    }
)

export const likeMovieAsync= createAsyncThunk(
    "likeMovieAsync",
    async (data: likeAMovie)=>{
        try {
            const response= await UserPost.like(data.id, data.movie)
            return response
        } catch (error) {
            console.log(error)
            return []
          }
    }
)

export const wishListMovieAsync= createAsyncThunk(
    "wishListMovieAsync",
    async (data: likeAMovie)=>{
        try {
            const response= await UserPost.wishList(data.id, data.movie)
            return response
        } catch (error) {
            console.log(error)
            return []
          }
    }
)

export const watchMovieAsync= createAsyncThunk(
    "watchMovieAsync",
    async (data: likeAMovie)=>{
        try {
            const response= await UserPost.history(data.id, data.movie)
            return response
        } catch (error) {
            console.log(error)
            return []
          }
    }
)

export const searchMovieAsync= createAsyncThunk(
    "searchMovieAsync",
    async(word: string)=>{
        try {
            const response= await UserPost.searchMovie(word)
            return response
        } catch (error) {
            console.log(error)
            return []
        }
    }
)