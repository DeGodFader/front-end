import { SearchOutlined } from '@ant-design/icons'
import { Col, Form, Input, Row, Space, Typography, Card as AntCard } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../State/hooks'
import LocalStorage from '../../../../Helpers/storage'
import { fetchDiscoverAsync, fetchPopularMoviesAsync, fetchTrendingAsync, searchMovieAsync } from '../../State/thunks/resultThunk'
import { setFullArray } from '../../State/reducers/resultReducer'
import Loader from '../../../../Components/Loaders/Loader'
import styled from 'styled-components'
import { TMDB_IMAGE_BASE_PATH } from '../../../../appEnv'
import { GenreMap } from '../../../../Helpers/constants'

const {Title, Text}= Typography

const Searcher = () => {
  const navigate= useNavigate()
  const dispatch= useAppDispatch()
  const user=LocalStorage.getCurrentUser()
  const { search, loading }= useAppSelector((state)=> state.getResults)

  const [searcher, setSearcher]= useState<string>('')
  const [searching, setSeaching]= useState<"Not"|"On-It"|"Done">('Not')

  const searchMovie=()=>{
    setSeaching("On-It")
    dispatch(searchMovieAsync(searcher)).then(_=>{
      setSeaching("Done")
    })
  }

  useEffect(()=>{
    if(search.length>1) setSeaching("Done")
  },[])

  return (
    <main style={{padding:"15px 10px", overflowX:"hidden"}}>
        <Form
          onFinish={searchMovie}
        >
          <center>
            <Input style={{borderRadius:"2rem", backgroundColor:"var(--color-neutral-700"}} onChange={(e)=>{
              setSearcher(e.target.value)
            }} suffix={<SearchOutlined style={{fontSize:32, color:"var(--color-5-500)"}}  onClick={()=>{searchMovie()}} />}/>
          </center>
        </Form>
        {searching==="Not"?(
          <div style={{position:'fixed', top:"5dvh"}}>
            <Title level={4} style={{color:"white"}}>Looking For Something Specific...?</Title>
          </div>
        ):(
          <>
            {loading && searching==="On-It"?(
              <Loader loading={loading}/>
            ):(
              <Row justify={'space-between'} style={{marginTop: 40}}>
                {search.length>1?(
                  <>
                    {search.map((movie, index)=>{
                      if(movie.poster_path)
                        return(
                          <Col key={index} span={11} style={{marginBottom: 30}}>
                            <Card key={index} onClick={()=>{movie.media_type=="tv"? navigate(`/tv_show/${movie.id}/${index}`):navigate(`/movie/${movie.id}/${index}`)}}>
                              <img src={`${TMDB_IMAGE_BASE_PATH}${movie.poster_path}`} width={"100%"} height={195}/>
                              <Tex >{movie.title? movie.title : movie.name}</Tex>
                              <Genres>
                                {movie.genre_ids.map((genre, index)=>{
                                    if(index<2)return(
                                        <SubText key={index}>{`${GenreMap.find(gen=>{ return gen.id===genre}).name}${index==1? ``: " | "}`}</SubText>
                                    )
                                })}
                              </Genres>
                            </Card>
                          </Col>
                        )
                    })}
                  </>
                ):(
                  <div style={{position:'fixed', top:"5dvh"}}>
                    <Title level={4} style={{color:"white"}}>No Results Found....😢</Title>
                  </div>
                )}
              </Row>
            )}
          </>
        )}
    </main>
  )
}

export default Searcher


const Card=styled(AntCard)`
    margin-right: 5px; 
    margin-bottom: 10px;
    background: transparent;
    border: none;

    & .ant-card-body {
        padding:0px !important;
    }
`

const Tex= styled(Text)`
    position: absolute;
    left: 0px;
    bottom: -15px;
    font-size: 14px;
    color: var(--color-white) !important;
    line-height: 15px;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    max-width: 150px; 
`

const SubText= styled(Text)`
    display: in-line;
    font-size: 10px;
    color: var(--color-neutral-400) !important;
`
const Genres= styled.div`
    position: absolute;
    left: 00px;
    bottom: -35px;
`