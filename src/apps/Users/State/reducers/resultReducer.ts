import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchDiscoverAsync, fetchMovieAsync, fetchPopularMoviesAsync, fetchSeriesAsync, fetchTrendingAsync, homePageAsync, likeMovieAsync, watchMovieAsync, wishListMovieAsync } from "../thunks/resultThunk"
import { RootState } from "../store"


export interface likeAMovie{
  id: string
  movie:{id: number, name: string, genre_ids: Array<any>, poster_path: string}
}

interface TVShow {
  adult: boolean;
  backdrop_path: string;
  created_by: {
      id: number;
      credit_id: string;
      name: string;
      gender: number;
      profile_path: string;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: {
      id: number;
      name: string;
  }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  networks: {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
  }[];
  production_countries: {
      iso_3166_1: string;
      name: string;
  }[];
  seasons: {
      air_date: string | null;
      episode_count: number;
      id: number;
      name: string;
      overview: string;
      poster_path: string;
      season_number: number;
      vote_average: number;
  }[];
  spoken_languages: {
      english_name: string;
      iso_639_1: string;
      name: string;
  }[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  images: {
      backdrops: {
          aspect_ratio: number;
          height: number;
          iso_639_1: string | null;
          file_path: string;
          vote_average: number;
          vote_count: number;
          width: number;
      }[];
      logos: {
          aspect_ratio: number;
          height: number;
          iso_639_1: string | null;
          file_path: string;
          vote_average: number;
          vote_count: number;
          width: number;
      }[];
      posters: {
          aspect_ratio: number;
          height: number;
          iso_639_1: string | null;
          file_path: string;
          vote_average: number;
          vote_count: number;
          width: number;
      }[];
  };
  videos: {
      results: {
          iso_639_1: string;
          iso_3166_1: string;
          name: string;
          key: string;
          published_at: string;
          site: string;
          size: number;
          type: string;
          official: boolean;
          id: string;
      }[];
  };
  reviews: {
      page: number;
      results: {
          author: string;
          author_details: {
              name: string | null;
              username: string;
              avatar_path: string | null;
              rating: number | null;
          };
          content: string;
          created_at: string;
          id: string;
          updated_at: string;
          url: string;
      }[];
      total_pages: number;
      total_results: number;
  };
  credits: {
      cast: {
          adult: boolean;
          gender: number;
          id: number;
          known_for_department: string;
          name: string;
          original_name: string;
          popularity: number;
          profile_path: string | null;
          character: string;
          credit_id: string;
          order: number;
      }[];
      crew: {
          adult: boolean;
          gender: number;
          id: number;
          known_for_department: string;
          name: string;
          original_name: string;
          popularity: number;
          profile_path: string | null;
          credit_id: string;
          department: string;
          job: string;
      }[];
  };
}

interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface CrewMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

interface Credits {
  cast: CastMember[];
  crew: CrewMember[];
}

export interface Trending {
    adult: boolean,
    backdrop_path: string,
    id: string|number,
    title: string,
    original_language: string,
    original_title: string,
    name: string
    overview: string,
    poster_path: string,
    genre_ids: Array<number>,
    media_type: "tv" | "movies",
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

interface CategoryType{
    category: number,
    results: Array<Trending>
}

interface Collection {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
}

interface Genre {
    id: number;
    name: string;
}

interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

interface Image {
    aspect_ratio: number;
    height: number;
    iso_639_1: string | null;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

interface Review {
    author: string;
    author_details: {
        name: string;
        username: string;
        avatar_path: string | null;
        rating: number | null;
    };
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
}

interface Video {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

interface Movie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: Collection | null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    images: {
        backdrops: Image[];
        logos: Image[];
        posters: Image[];
    };
    reviews: {
        results: Review[];
    };
    videos: {
        results: Video[];
    };
    credits: Credits;
}



interface results{
  tvShow: TVShow
  movie: Movie
  all: Array<Trending>
  popular: Array<Trending>
  discover: Array<Trending>
  trending: Array<Trending>
  Tmovies: Array<Trending>
  Ttv_shows: Array<Trending>
  Pmovies: Array<Trending>
  Ptv_shows: Array<Trending>
  Dmovies: Array<Trending>
  Dtv_shows: Array<Trending>
  loading: boolean
  categories: Array<CategoryType>
  liked_movies: Array<Partial<Trending>>
  trailers_watched: Array<Partial<Trending>>
  my_list: Array<Partial<Trending>>
  watch_history: Array<Partial<Trending>>
  recommendations: Array<Partial<Trending>>
}

const singleTVShow: TVShow = {
  adult: false,
  backdrop_path: "",
  created_by: [],
  episode_run_time: [],
  first_air_date: "",
  genres: [],
  homepage: "",
  id: 0,
  in_production: false,
  languages: [],
  last_air_date: "",
  name: "",
  networks: [],
  number_of_episodes: 0,
  number_of_seasons: 0,
  origin_country: [],
  original_language: "",
  original_name: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  production_companies: [],
  production_countries: [],
  seasons: [],
  spoken_languages: [],
  status: "",
  tagline: "",
  type: "",
  vote_average: 0,
  vote_count: 0,
  images: {
    backdrops: [],
    logos: [],
    posters: [],
  },
  videos: {
    results: [],
  },
  reviews: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  credits: {
    cast: [],
    crew: [],
  },
};

const singleMovie: Movie= {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage:  "",
    id: 0,
    imdb_id:  "",
    original_language:  "",
    original_title: "",
    overview:  "",
    popularity:  0,
    poster_path:  "",
    production_companies: [],
    production_countries: [],
    release_date:  "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status:  "",
    tagline:  "",
    title:  "",
    video: false,
    vote_average: 0,
    vote_count: 0,
    images: {
        backdrops: [],
        logos: [],
        posters: [],
    },
    reviews: {
        results: [],
    },
    videos: {
        results: [],
    },
    credits: {
      cast: [],
      crew: [],
    },
}

const initialState: results={
    tvShow: singleTVShow,
    movie: singleMovie,
    all: [],
    popular: [],
    discover: [],
    trending: [],
    Tmovies: [],
    Ttv_shows: [],
    Pmovies: [],
    Ptv_shows: [],
    Dmovies: [],
    Dtv_shows: [],
    loading: false,
    categories: [],
    recommendations: [],
    watch_history: [],
    my_list: [],
    trailers_watched: [],
    liked_movies: []
}

function mergeArraysScattered(array1: Array<Trending>, array2: Array<Trending>): Array<Trending> {
  const mergedArray: Array<Trending> = [];
  const minLength = Math.min(array1.length, array2.length);

  for (let i = 0; i < minLength; i++) {
    mergedArray.push(array1[i], array2[i]);
  }

  mergedArray.push(...array1.slice(minLength), ...array2.slice(minLength));

  return mergedArray;
}

export const getResultsSlice= createSlice({
    name: "getResults",
    initialState,
    reducers: {
        resetTrending:(state)=>{
            state.trending=[]
        },
        resetMovies:(state)=>{
            state.Tmovies=[]
        },
        resetTVShow:(state)=>{
            state.Ttv_shows=[]
        },
        setFullArray: (state) => {
            const allMovies = [...state.trending, ...state.Dtv_shows, ...state.Dmovies];
            
            allMovies.forEach(movie => {
              movie.genre_ids.forEach(genreId => {
                const existingCategory = state.categories.find(category => category.category === genreId);
                if (!existingCategory) {
                  state.categories.push({
                    category: genreId,
                    results: [movie]
                  });
                } else {
                  if (!existingCategory.results.some(result => result.id === movie.id)) {
                    existingCategory.results.push(movie);
                  }
                }
              });
            });
        }  
    },extraReducers(builder) {
        builder
          .addCase(likeMovieAsync.fulfilled, (state, action)=>{
            state.liked_movies=action.payload
          })
          .addCase(watchMovieAsync.fulfilled, (state, action)=>{
            state.watch_history=action.payload
          })
          .addCase(wishListMovieAsync.fulfilled, (state, action)=>{
            state.my_list=action.payload
          })
          .addCase(homePageAsync.pending, (state)=>{
            state.loading= true
          })
          .addCase(homePageAsync.rejected, (state)=>{
            state.loading= false
          })
          .addCase(homePageAsync.fulfilled, (state, action)=>{
            state.trending= action.payload.movies.trending
            state.Tmovies = [...state.Tmovies, ...action.payload.movies.trending.filter(movie => movie.media_type === "movie")];
            state.Ttv_shows = [...state.Ttv_shows, ...action.payload.movies.trending.filter(movie => movie.media_type === "tv")];
            state.Dmovies= action.payload.movies.discover.movies
            state.Dtv_shows= action.payload.movies.discover.series
            state.Dtv_shows.map(show=>{
              show.media_type="tv"
            })
            state.discover = [...state.popular, ...mergeArraysScattered(state.Dmovies, state.Dtv_shows)];
            state.Pmovies= action.payload.movies.popular.movies
            state.Ptv_shows= action.payload.movies.popular.series
            state.Ptv_shows.map(show=>{
              show.media_type="tv"
            })
            state.popular = [...state.popular, ...mergeArraysScattered(state.Ptv_shows, state.Pmovies)];
            state.watch_history= action.payload.user.history
            state.liked_movies= action.payload.user.likes
            state.my_list= action.payload.user.watch_list
            state.recommendations= action.payload.recommendations
            state.loading = false;
          })
          .addCase(fetchTrendingAsync.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchTrendingAsync.rejected, (state) => {
            state.loading = false;
          })
          .addCase(fetchTrendingAsync.fulfilled, (state, action) => {
            state.trending = [...state.trending, ...action.payload];
            state.Tmovies = [...state.Tmovies, ...action.payload.filter(movie => movie.media_type === "movie")];
            state.Ttv_shows = [...state.Ttv_shows, ...action.payload.filter(movie => movie.media_type === "tv")];
            state.loading = false;
          })
          .addCase(fetchMovieAsync.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchMovieAsync.rejected, (state) => {
            state.loading = false;
          })
          .addCase(fetchMovieAsync.fulfilled, (state, action) => {
            state.movie= action.payload
            state.loading = false;
          })
          .addCase(fetchSeriesAsync.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchSeriesAsync.rejected, (state) => {
            state.loading = false;
          })
          .addCase(fetchSeriesAsync.fulfilled, (state, action) => {
            state.tvShow= action.payload
            state.loading = false;
          })
          .addCase(fetchDiscoverAsync.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchDiscoverAsync.rejected, (state) => {
            state.loading = false;
          })
          .addCase(fetchDiscoverAsync.fulfilled, (state, action) => {
             state.Dmovies= action.payload.movies
             state.Dtv_shows= action.payload.series
             state.Dtv_shows.map(show=>{
              show.media_type="tv"
             })
            state.discover = [...state.popular, ...mergeArraysScattered(state.Dmovies, state.Dtv_shows)];
            state.loading = false;
          })
          .addCase(fetchPopularMoviesAsync.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchPopularMoviesAsync.rejected, (state) => {
            state.loading = false;
          })
          .addCase(fetchPopularMoviesAsync.fulfilled, (state, action) => {
             state.Pmovies= action.payload.movies
             state.Ptv_shows= action.payload.series
             state.Ptv_shows.map(show=>{
              show.media_type="tv"
             })
            state.popular = [...state.popular, ...mergeArraysScattered(state.Ptv_shows, state.Pmovies)];
            state.loading = false;
          });
      }
      
})


export const { resetMovies, resetTrending, resetTVShow, setFullArray } = getResultsSlice.actions

export const getResults = (state: RootState) => state.getResults.trending

export default getResultsSlice.reducer