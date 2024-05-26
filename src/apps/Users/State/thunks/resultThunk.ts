import { createAsyncThunk } from "@reduxjs/toolkit";
import UserPost, { FetchDiscoverMovies, FetchDiscoverSeries, FetchMovie, FetchPopularMovies, FetchPopularSeries, FetchSerie, FetchTrending } from "../../Api/api";
import { notify } from "../../../../Helpers/functions";


export const homePageAsync= createAsyncThunk(
    "homePageAsync",
    async()=>{
        try {
            const response: {trending: Array<any>, popular: {movies: Array<any>, series: Array<any>}, discover: {movies: Array<any>, series: Array<any>}}= await UserPost.homepage()
            console.log(response)
            return response
        } catch (error) {
            notify({type:"ERROR", message:"Try again", duration:3})
            console.log(error)
            return  {trending: [], popular: {movies: [], series:  []}, discover:{movies: [], series:  []}}
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