import { Card as AntCard, Row, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { TMDB_IMAGE_BASE_PATH } from '../../../../../appEnv'
import { useAppSelector } from '../../../State/hooks'
import Categories from '../../../../../Components/MovieCategories/Categories'
import PageLoader from '../../../../../Components/Loaders/PageLoader'
import ComingSoon from '../../../../../Components/ComingSoon/ComingSoon'
import Loader from '../../../../../Components/Loaders/Loader'

const { Title, Text } = Typography

const All = () => {

  const { trending, loading, categories, popular, discover } = useAppSelector((state)=> state.getResults)


  return (
    <>
        {loading?(
          <PageLoader />
        ):(
          <div>
            <Categories title='Trending' movies={trending} clickable />
            <div>
              <Title level={3}>{"Recommended"}</Title>
              <ComingSoon />
            </div>
            <div>
              <Title level={3}>{"Continue Watching"}</Title>
              <ComingSoon />
            </div>
            <Categories title='Popular' movies={popular} clickable/>
            <Categories title='Dicover' movies={discover} clickable/>
          </div>
        )}
    </>
  )
}

export default All


