import React from 'react'
import { useAppSelector } from '../../../State/hooks'
import PageLoader from '../../../../../Components/Loaders/PageLoader'
import Categories from '../../../../../Components/MovieCategories/Categories'
import Loader from '../../../../../Components/Loaders/Loader'

const Movies = () => {
  const { Tmovies, loading, Dmovies, Pmovies } = useAppSelector((state)=> state.getResults)
  const categories_list=["Sci-Fi & Fantasy", "Action & Adventure", "Drama", "Comedy", "Horror", "Romance", "Thriller", "Mystery", "Fantasy", "Animation", "Soap", "Reality", "Documentary"]
  return (
    <>
        {loading?(
          <Loader />
        ):(
          <div>
            <Categories title='Trending' movies={Tmovies} clickable/>
            <Categories title='Popular' movies={Pmovies} clickable/>
            <Categories title='Discover' movies={Dmovies} clickable/>
          </div>
        )}
    </>
  )
}

export default Movies
