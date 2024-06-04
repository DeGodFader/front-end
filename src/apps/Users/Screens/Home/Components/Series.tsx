import React from 'react'
import { useAppSelector } from '../../../State/hooks'
import PageLoader from '../../../../../Components/Loaders/PageLoader'
import Categories from '../../../../../Components/MovieCategories/Categories'
import Loader from '../../../../../Components/Loaders/Loader'

const Series = () => {
  const { Ttv_shows, loading, Ptv_shows, Dtv_shows } = useAppSelector((state)=> state.getResults)
  return (
    <>
        {loading?(
          <Loader loading={loading}/>
        ):(
          <div>
            <Categories title='Trending' movies={Ttv_shows} clickable />
            <Categories title='Popular' movies={Ptv_shows} clickable/>
            <Categories title='Discover' movies={Dtv_shows} clickable/>
          </div>
        )}
    </>
  )
}

export default Series
