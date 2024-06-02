import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../State/hooks'
import { fetchMovieAsync, likeMovieAsync, watchMovieAsync, wishListMovieAsync } from '../../State/thunks/resultThunk'
import { useNavigate, useParams } from 'react-router'
import PageLoader from '../../../../Components/Loaders/PageLoader'
import { TMDB_IMAGE_BASE_PATH, TMDB_TRAILER_VIDEO_PATH } from '../../../../appEnv'
import { AppstoreAddOutlined, CheckOutlined, CloseOutlined, DownloadOutlined, FileAddOutlined, FileDoneOutlined, HeartFilled, HeartOutlined, LeftCircleOutlined, MoreOutlined, PlayCircleFilled, StarFilled } from '@ant-design/icons'
import styled from 'styled-components'
import { Button, Popover, Row, Space, Typography, Modal } from 'antd'
import { GenreMap, LanguagesMap } from '../../../../Helpers/constants'
import dayjs from 'dayjs'
import { PrimaryButton } from '../../../../Components/Buttons/Buttons'
import Categories from '../../../../Components/MovieCategories/Categories'
import CommentSection from '../../../../Components/MovieCategories/CommentSection'
import Loader from '../../../../Components/Loaders/Loader'
import UserPost from '../../Api/api'
import LocalStorage from '../../../../Helpers/storage'

const {Title, Text} = Typography

type PicturesType={path: string, type: "video" | "image"}
type CastType={path: string,type: "video" | "image", name: string, character: string}
type CommentsType={avatar_path: string,author: string,rating: number,content: string,created_at: string}


const SingleMovie = () => {
  const {id, result}= useParams()
  const dispatch= useAppDispatch()
  const navigate= useNavigate()

  const [items, setItems]= useState<Array<PicturesType>>([])
  const [cast, setCast]= useState<Array<CastType>>([])
  const [comments, setComments]= useState<Array<CommentsType>>([])
  const [liked, setLiked]= useState<boolean>(false)
  const [watched, setWatched]= useState<boolean>(false)
  const [listed, setListed]= useState<boolean>(false)
  const [open, setOpen]= useState<boolean>(false)

  const {movie, loading, liked_movies, my_list, watch_history} = useAppSelector((state)=> state.getResults)
  console.log(movie)

  useEffect(()=>{
    if (id) {
      dispatch(fetchMovieAsync(id))
    }
  },[])

  useEffect(()=>{
    if (!loading) {
      setItems(_=> {
        const image_list = movie.images?.posters?.slice(0, 6) || [];
        const video: Array<PicturesType> = [{
          type: "video",
          path: movie.videos?.results?.find(video => video.type.toLocaleLowerCase().includes("trailer"))?.key
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
        const cast_list= movie.credits.cast.slice(0,7) || []

        const cast:Array<CastType>=cast_list.map(({name, profile_path, character})=>({
          name: name,
          path: profile_path,
          character: character,
          type: "image"
        }))

        return [...cast]
      })
      setComments(___=>{
        const comment_list= movie.reviews.results

        const commentss:Array<CommentsType>=comment_list.map(({ author_details, content, created_at })=>({
          avatar_path: author_details.avatar_path,
          author: author_details.name,
          rating: author_details.rating,
          content: content,
          created_at: created_at
        }))

        return [...commentss]
      })
      setLiked(liked_movies.find(like=> like.id===movie.id)!==undefined? true : false)
      setListed(my_list.find(like=> like.id===movie.id)!==undefined? true : false)
      setWatched(watch_history.find(like=> like.id===movie.id)!==undefined? true : false)
    }
  },[movie])

  const LikeMovie= async()=>{
    try {
      const genre_ids: Array<number>=[]
      movie.genres.map(gen=>{
        genre_ids.push(gen.id)
      })
      dispatch(likeMovieAsync({id:LocalStorage.getCurrentUser().id,movie:{id: movie.id, name: movie.original_title, genre_ids: genre_ids, poster_path: movie.poster_path}}))
      setLiked(true)
    } catch (error) {
      console.log(error)
    }
  }

  const WishListMovie= async()=>{
    try {
      const genre_ids: Array<number>=[]
      movie.genres.map(gen=>{
        genre_ids.push(gen.id)
      })
      dispatch(wishListMovieAsync({id:LocalStorage.getCurrentUser().id,movie:{id: movie.id, name: movie.original_title, genre_ids: genre_ids, poster_path: movie.poster_path}}))
      setListed(true)
    } catch (error) {
      console.log(error)
    }
  }

  const watchMovie= async()=>{
    try {
      const genre_ids: Array<number>=[]
      movie.genres.map(gen=>{
        genre_ids.push(gen.id)
      })
      dispatch(watchMovieAsync({id:LocalStorage.getCurrentUser().id,movie:{id: movie.id, name: movie.original_title, genre_ids: genre_ids, poster_path: movie.poster_path}}))
      setWatched(true)
    } catch (error) {
      console.log(error)
    }
  }

  console.log()

  const Watch=()=>{
    return(
      <ReotateHolder>
        <CloseOutlined style={{position:'fixed',right:20, top:20, fontSize:30, zIndex:9999, color:"whitesmoke"}} onClick={()=>{setOpen(false)}}/>
        <RotatedComponent>
          <iframe
            style={{ width:"100%", height:"100%"}}
            className='youtube-player'
            src={`${TMDB_TRAILER_VIDEO_PATH}/${movie.videos?.results?.find(video => video.type.toLocaleLowerCase().includes("trailer"))?.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </RotatedComponent>
      </ReotateHolder>
    )
  }

  return (
    <>
      {open&&(<Watch />)}
      {loading?(
        <Loader />
      ): (
        <> 
          <div>
            <BackDrop>
                <img src={`${TMDB_IMAGE_BASE_PATH}${movie.backdrop_path}`} style={{width:"100dvw", height:"40dvh", opacity:0.9}} alt={`${movie.title}-image`} />
                <div className='shadow'>.</div>
                <LeftCircleOutlined style={{color:"var(--color-5-500", fontSize:24, position:'absolute', left:10, top: 30, fontWeight:800}} onClick={()=> {
                  result? navigate("/search") : navigate("/")
                }}/>
                <Space style={{gap: 10, color:"var(--color-5-500", fontSize:24, position:'absolute', right:10, top: 30,}}>
                  {!liked?(
                    <HeartOutlined style={{fontWeight:800, fontSize:24}} onClick={LikeMovie}/>
                  ):(
                    <HeartFilled style={{fontWeight:800, fontSize:24}}/>
                  )}
                </Space>
                <div className='rating'>
                  <StarFilled style={{color:"gold"}}/>  <span>{movie.vote_average.toPrecision(2)}</span>
                </div>
                <Title level={4}>{movie.title}</Title>
                <Genres>
                        {movie.genres.map((genre, index)=>{
                            if(index<2)return(
                                <SubText key={index}>{`${GenreMap.find(gen=>{ return gen.id===genre.id}).name}${index==1? ``: " | "}`}</SubText>
                            )
                        })}
                    </Genres>
            </BackDrop>
            <Body>
              <Text className='overview'>
                {movie.overview}
              </Text>
              <center>
                <Row justify={"space-around"} style={{width:"50%", color: "white"}}>
                    <Text>{movie.runtime} mins</Text>
                    <Text>{dayjs(movie.release_date).format("YYYY")}</Text>
                    {!loading&&(<Text>{LanguagesMap.find(lang=>lang.iso_639_1===movie.original_language)?.name}</Text>)}
                </Row>
              </center>
              <center style={{marginTop:"3rem"}}>
                <Row justify={"space-around"}>
                  <PrimaryButton>
                    <Btn type='primary' onClick={()=>{
                      setOpen(true)
                      watchMovie()
                      }}>
                      <PlayCircleFilled/>
                      Watch
                    </Btn >
                  </PrimaryButton>
                  {!listed?(
                    <AppstoreAddOutlined style={{color:"var(--color-secondary-500)", fontSize:42}} onClick={WishListMovie}/>
                  ):(
                    <FileDoneOutlined style={{color:"var(--color-secondary-500)", fontSize:42}}/>
                  )}
                </Row>
              </center>
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

export default SingleMovie


const ReotateHolder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh; /* Use vh here because the width becomes the height after rotation */
  width: 100dvw; /* Use vw here because the height becomes the width after rotation */
  z-index: 9999;
`

const RotatedComponent = styled.div`
  position: relative;
  right: 25dvh;
  height: 100%;
  width: 100dvh;
  transform: rotate(90deg);
`;

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
      width: 100%;
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