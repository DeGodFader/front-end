import { SearchOutlined, UserAddOutlined } from '@ant-design/icons'
import { Avatar, Row, Space, TabsProps, Typography } from 'antd'
import React, { useEffect } from 'react'
import LocalStorage from '../../../../Helpers/storage'
import { Tabs } from '../../../../Components/Tabs/Tab1'
import All from './Components/All'
import Movies from './Components/Movies'
import Series from './Components/Series'
import { useAppDispatch, useAppSelector } from '../../State/hooks'
import { fetchDiscoverAsync, fetchPopularMoviesAsync, fetchTrendingAsync } from '../../State/thunks/resultThunk'
import { setFullArray } from '../../State/reducers/resultReducer'

const { Text, Title }= Typography

const HomePage = () => {
    const user= LocalStorage.getCurrentUser()
    const dispatch= useAppDispatch()

    useEffect(()=>{
      dispatch(fetchTrendingAsync(1)).then(_=>{
        dispatch(fetchDiscoverAsync(1)).then(_=>{
          dispatch(fetchPopularMoviesAsync(2)).then(_=>{
            dispatch(setFullArray())
          })
        })
      })  
      dispatch(fetchTrendingAsync(2)).then(_=>{
        dispatch(fetchDiscoverAsync(2)).then(_=>{
          dispatch(fetchPopularMoviesAsync(1)).then(_=>{
            dispatch(setFullArray())
          })
        })
      })  
      
    },[])

    const tabItems: TabsProps["items"] = [
        {
          key: "all",
          label: "All",
          children: <All />,
        },
        {
          key: "movies",
          label: "Movies",
          children: <Movies />,
        },
        {
          key: "tv-shows",
          label: "TV Shows",
          children: <Series />,
        },
      ]
  return (
    <main style={{padding:"15px 10px", overflowX:"hidden"}}>
        <Row justify={"space-between"} align={"middle"}>
            <Space align='center'>
                <Avatar icon={<UserAddOutlined />} size={64}/>
                <div  style={{display:"flex", flexDirection:"column",gap:1}}>
                    <Text style={{fontFamily:"Roboto", fontSize:18, color: "white"}}>{user.username}</Text>
                    <Text style={{color: "var(--color-neutral-400", fontSize: 12}}>Never Stop Watching...</Text>
                </div>
            </Space>
            <SearchOutlined style={{fontSize:32, color:"var(--color-5-500)"}} />
        </Row>
        <Tabs
            style={{width:"100%"}}
            defaultActiveKey='all'
            items={tabItems}
            onChange={() => window.scrollTo({ top: 580, behavior: "smooth" })}
        />
    </main>
  )
}

export default HomePage
