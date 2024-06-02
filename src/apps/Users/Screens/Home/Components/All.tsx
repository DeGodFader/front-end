import { Card as AntCard, Row, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { TMDB_IMAGE_BASE_PATH } from '../../../../../appEnv'
import { useAppSelector } from '../../../State/hooks'
import Categories from '../../../../../Components/MovieCategories/Categories'
import PageLoader from '../../../../../Components/Loaders/PageLoader'
import ComingSoon from '../../../../../Components/ComingSoon/ComingSoon'
import Loader from '../../../../../Components/Loaders/Loader'
import { GenreMap } from '../../../../../Helpers/constants'

const { Title, Text } = Typography

const All = () => {

  const { trending, loading, categories, popular, discover, recommendations } = useAppSelector((state)=> state.getResults)

  const categories_list=["Sci-Fi & Fantasy", "Action & Adventure", "Drama", "Comedy", "Horror", "Romance", "Thriller", "Mystery", "Fantasy", "Animation", "Soap", "Reality", "Documentary"]

  return (
    <>
        {loading?(
          <PageLoader />
        ):(
          <div>
            <Categories title='Trending' movies={trending} clickable />
            <Categories title='Recommendations' movies={recommendations} clickable />
            <Categories title='Popular' movies={popular} clickable/>
            <Categories title='Dicover' movies={discover} clickable/>
            {categories.map((category, index)=>{
                const Cat=GenreMap.find(genre=> genre.id===category.category && categories_list.includes(genre.name))
                if(Cat) 
                  return(<Categories title={Cat.name} movies={category.results} key={index} clickable/>) 
              }
            )}
          </div>
        )}
    </>
  )
}

export default All


