import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../State/hooks'
import { fetchSeriesAsync } from '../../State/thunks/resultThunk'
import { useNavigate, useParams } from 'react-router'
import PageLoader from '../../../../Components/Loaders/PageLoader'
import { TMDB_IMAGE_BASE_PATH } from '../../../../appEnv'
import { DownloadOutlined, HeartOutlined, LeftCircleOutlined, MoreOutlined, PlayCircleFilled, StarFilled } from '@ant-design/icons'
import styled from 'styled-components'
import { Button, Row, Space, TabsProps, Typography } from 'antd'
import { GenreMap, LanguagesMap } from '../../../../Helpers/constants'
import dayjs from 'dayjs'
import { PrimaryButton } from '../../../../Components/Buttons/Buttons'
import Loader from '../../../../Components/Loaders/Loader'
import Categories from '../../../../Components/MovieCategories/Categories'
import CommentSection from '../../../../Components/MovieCategories/CommentSection'
import Season from './Components/Season'
import { Tabs2 } from '../../../../Components/Tabs/Tab1'

const {Title, Text} = Typography

type PicturesType={path: string, type: "video" | "image"}
type CastType={path: string,type: "video" | "image", name: string, character: string}
type CommentsType={avatar_path: string,author: string,rating: number,content: string,created_at: string}


const SingleShow = () => {
    const {id}= useParams()
    const dispatch= useAppDispatch()
    const navigate= useNavigate()
  
    const [items, setItems]= useState<Array<PicturesType>>([])
    const [cast, setCast]= useState<Array<CastType>>([])
    const [comments, setComments]= useState<Array<CommentsType>>([])
  
    const {tvShow, loading} = useAppSelector((state)=> state.getResults)
    console.log(tvShow)
  
    useEffect(()=>{
      if (id) {
        console.log(id)
        dispatch(fetchSeriesAsync(id))
      }
    },[])

    useEffect(()=>{
      if (!loading) {
        setItems(_=> {
          const image_list = tvShow.images?.posters?.slice(0, 6) || [];
          const video: Array<PicturesType> = [{
            type: "video",
            path: tvShow.videos?.results?.find(video => video.type.toLocaleLowerCase().includes("trailer"))?.key
          }]
          const images: Array<PicturesType> = image_list.map(({ file_path }) => ({
            type: "image",
            path: file_path
          }));
          return [
            ...video,
            ...images
          ];
        });
        setCast(__=>{
          const cast_list= tvShow.credits.cast.slice(0,7) || []
  
          const cast:Array<CastType>=cast_list.map(({name, profile_path, character})=>({
            name: name,
            path: profile_path,
            character: character,
            type: "image"
          }))
  
          return [...cast]
        })
        setComments(___=>{
          const comment_list= tvShow.reviews.results
  
          const commentss:Array<CommentsType>=comment_list.map(({ author_details, content, created_at })=>({
            avatar_path: author_details.avatar_path,
            author: author_details.name,
            rating: author_details.rating,
            content: content,
            created_at: created_at
          }))
  
          return [...commentss]
        })
      }
    },[tvShow])

    const tabItems: TabsProps["items"] = tvShow.seasons.map(season=>({
      key: String(season.id),
      label: season.name,
      children: <Season data={season} />,
    }))

  return (
    <>
      {loading?(
        <PageLoader />
      ): (
        <> 
          <div>
            <BackDrop>
                <img src={`${TMDB_IMAGE_BASE_PATH}${tvShow.backdrop_path}`} style={{width:"100dvw", height:"40dvh", opacity:0.9}} alt={`${tvShow.name}-image`} />
                <div className='shadow'>.</div>
                <LeftCircleOutlined style={{color:"var(--color-5-500", fontSize:24, position:'absolute', left:10, top: 30, fontWeight:800}} onClick={()=> navigate("/")}/>
                <Space style={{gap: 10, color:"var(--color-5-500", fontSize:24, position:'absolute', right:10, top: 30,}}>
                  <HeartOutlined style={{fontWeight:800, fontSize:24,}} onClick={()=>{}}/>
                  <MoreOutlined style={{fontWeight:800, fontSize:24,}} onClick={()=> navigate("/")}/>
                </Space>
                <div className='rating'>
                  <StarFilled style={{color:"gold"}}/>  <span>{tvShow.vote_average.toPrecision(2)}</span>
                </div>
                <Title level={4}>{tvShow.name}</Title>
                <Genres>
                    {tvShow.genres.map((genre, index)=>{
                        if(index<2)return(
                            <SubText key={index}>{`${GenreMap.find(gen=>{ return gen.id===genre.id}).name}${index==1? ``: " | "}`}</SubText>
                        )
                    })}
                </Genres>
            </BackDrop>
            <Body>
              <Text className='overview'>
                {tvShow.overview}
              </Text>
              <center>
                <Row justify={"space-around"} style={{width:"100%", color: "white"}}>
                    <Text>{tvShow.seasons.length} Seasons </Text>
                    <Text>{tvShow.in_production? "In Production" : "Terminated"}</Text>
                    {!loading&&(<Text>{LanguagesMap.find(lang=>lang.iso_639_1===tvShow.original_language)?.name}</Text>)}
                </Row>
              </center>
              <Tabs2
                  defaultActiveKey="all"
                  items={tabItems}
                  onChange={() => window.scrollTo({ top: 580, behavior: "smooth" })}
              />
              {/* <center style={{marginTop:"3rem"}}>
                <Row justify={"space-around"}>
                  <PrimaryButton>
                    <Btn type='primary'>
                      <PlayCircleFilled/>
                      Watch
                    </Btn >
                  </PrimaryButton>
                  <DownloadOutlined style={{color:"var(--color-secondary-500)", fontSize:42}}/>
                </Row>
              </center> */}
              <Categories items={items} title='Screenshots' clickable={false}/>
              <Categories items={cast} title='Cast' clickable={false} />
              <CommentSection comments={comments} />
            </Body>
            
          </div>
        </>
      )}
    </>
  )
}

export default SingleShow

const BackDrop= styled.div`
    position: relative;
    display: inline-block;

    & .shadow{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
      pointer-events: none; 
    }

    & h4.ant-typography{
      color: var(--color-white);
      position:absolute;
      bottom:25px;
      left: 10px;
      font-size: 24px !important;
      width: 50%;
    }

    & .rating{
      position:absolute;
      bottom:30%;
      left: 10px;
      padding: 5px;
      border: solid 0.1px var(--color-neutral-300) !important;
      background: var(--color-neutral-900);
      color: white;
      font-family: QuickSand;
      font-size: 11px;
      border-radius: 50px;
    }
`

const SubText= styled(Text)`
    display: in-line;
    font-size: 10px;
    color: var(--color-white) !important;
`
const Genres= styled.div`
    position:absolute;
    bottom:10px;
    left: 10px;
`

const Body=styled.div`
    padding: 0px 10px;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    & span.ant-typography{
      line-height: 16px;
      & .overview{
        color: var(--color-neutral-400) !important;
        fontsize: 12px;
      }
    }
`

const Btn= styled(Button)`
  border-radius: 10px !important;
  background-color: var(--color-500);
  font-family: Roboto !important;
  font-size: 28px !important;
  line-height: 42px !important;
  font-weight: 700 !important;
  color: var(--color-3-100) !important;
  height: 7.5rem !important;
  width: 22rem !important;
`