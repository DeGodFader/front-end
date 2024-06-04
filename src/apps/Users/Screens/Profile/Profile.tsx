import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Row, Space, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import LocalStorage from '../../../../Helpers/storage'
import Categories from '../../../../Components/MovieCategories/Categories'
import { useAppDispatch, useAppSelector } from '../../State/hooks'
import { useNavigate } from 'react-router-dom'
import { fetchDiscoverAsync, fetchPopularMoviesAsync, fetchTrendingAsync, homePageAsync } from '../../State/thunks/resultThunk'
import { setFullArray } from '../../State/reducers/resultReducer'
import PageLoader from '../../../../Components/Loaders/PageLoader'
import { logout } from '../../../../Helpers/functions'

const { Title, Text} = Typography

const Profile = () => {
    const navigate= useNavigate()
    const dispatch= useAppDispatch()
    const user=LocalStorage.getCurrentUser()
    const { Dmovies, Dtv_shows, loading, watch_history, liked_movies, my_list }= useAppSelector((state)=> state.getResults)

    const [logingout, setLogingOut]= useState<boolean>(false)
    useEffect(()=>{
        if(Dmovies.length<1){
          dispatch(homePageAsync(user.id)).then(_=>{
            dispatch(setFullArray())
          })
        }
        
      },[])

      const SignOut= async()=>{
        setLogingOut(true)
        await logout()
      }
  return (
    <main style={{padding:"0px 10px", overflowX:"hidden"}}>
        {loading?(
            <PageLoader />
        ):(
            <>
                <Row justify={"space-between"}>
                    <Space onClick={()=> navigate(`/`)}>
                        <img src='/svg/loading.svg' className='pulsate' style={{width: "10vw", height:"10vw"}} />
                        <Title>KINOVERSE</Title>
                    </Space>
                    <LogoutOutlined style={{color:"var(--color-5-500)", fontSize:"30px"}} disabled={logingout} onClick={()=>{SignOut()}}/>
                </Row>
                <Space direction='vertical' style={{width:"100%", marginTop:"7dvh"}}>
                    <center>
                        <Space direction='vertical' align='center'>
                            <Avatar icon={<UserOutlined style={{fontSize:64}}/>} size={64} />
                            <Text style={{fontSize:20, fontFamily:"Roboto"}}>{user.username}</Text>
                        </Space>
                    </center>
                    {/* <Categories title='Notification' movies={Dtv_shows.slice(10,14)} clickable={true} /> */}
                    <Categories title='Liked Movoes/TV Shows' movies={liked_movies} clickable={true} />
                    <Categories title='My List' movies={my_list} clickable={true} />
                    <Categories title='Watch History' movies={watch_history} clickable={true} />
                    {/* <Categories title='Trailers Watched' movies={Dmovies.slice(20,30)} clickable={true} /> */}
                </Space>
            </>
        )}
    </main>
  )
}

export default Profile