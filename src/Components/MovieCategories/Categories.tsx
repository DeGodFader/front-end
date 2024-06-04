import { Card as AntCard, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { TMDB_IMAGE_BASE_PATH, TMDB_TRAILER_VIDEO_PATH } from '../../appEnv'
import { Trending } from '../../apps/Users/State/reducers/resultReducer'
import { GenreMap } from '../../Helpers/constants'
import { useNavigate } from 'react-router-dom'


const { Title, Text } = Typography

type CategoryType={
    title: string,
    movies?: Array<Trending> | Array<Partial<Trending>>
    items?: Array<{path: String, type: "video" | "image", name?:string, character?: string}>
    clickable: boolean
}

const Categories: React.FC<CategoryType> = ({title, movies, items, clickable}) => {
    const navigate=useNavigate()
  return (
    <div>
        <Title level={3}>{title}</Title>
        <Scroller>
            <Wrapper>
                {movies && movies.map((movie, index) => (
                <Card key={index} onClick={()=>{
                    if(clickable){
                        movie.media_type=="tv"? navigate(`/tv_show/${movie.id}`):navigate(`/movie/${movie.id}`)
                    }
                }}>
                    <img src={`${TMDB_IMAGE_BASE_PATH}${movie.poster_path}`} width={160} height={195}/>
                    {movie.original_title?(
                        <Tex >{movie.original_title}</Tex>
                    ):(
                        <Tex >{movie.title? movie.title : movie.name}</Tex>
                    )}
                    {movie.genre_ids?(
                        <Genres>
                            {movie.genre_ids.map((genre, index)=>{
                                if(index<2)return(
                                    <SubText key={index}>{`${GenreMap.find(gen=>{ return gen.id===genre}).name}${index==1? ``: " | "}`}</SubText>
                                )
                            })}
                        </Genres>
                    ):(
                        <Genres>
                            {movie.genres.split(" ").map((genre, index)=>{
                                if(index<2)return(
                                    <SubText key={index}>{`${genre}${index==1? ``: " | "}`}</SubText>
                                )
                            })}
                        </Genres>
                    )}
                </Card>
                ))}
                {items && items.map((item, index) => (
                <Card key={index}>
                    {item.type==="video"&&(
                        <iframe
                            className='youtube-player'
                            width="300"
                            height="195"
                            src={`${TMDB_TRAILER_VIDEO_PATH}/${item.path}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>)}
                    {item.type==="image"&&(<>
                        <img src={`${TMDB_IMAGE_BASE_PATH}${item.path}`} width={160} height={195}/><br />
                        {item.name&&(<><Text>{item.name}</Text><Tex style={{fontSize: 10}}>{item.character}</Tex></>)}
                    </>)}
                </Card>
                ))}
            </Wrapper>
        </Scroller>
    </div>
  )
}

export default Categories

const Scroller= styled.div`
    overflow-x: auto;
    white-space: nowrap;
    width: 100%; 
    padding-bottom: 12px; 
    scrollbar-width: none; 
    -ms-overflow-style: none; 
    height: 230px;
    &::-webkit-scrollbar {
        display: none; 
    }
`
const Wrapper= styled.div`
    display: inline-block;
    white-space: nowrap;
`
const Card=styled(AntCard)`
    display: inline-block;
    margin-right: 10px; 
    margin-bottom: 8px;
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