import { SearchOutlined } from '@ant-design/icons'
import { Input, Space } from 'antd'
import React, { useEffect } from 'react'
import Categories from '../../../../Components/MovieCategories/Categories'
import { useNavigate } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../State/hooks'
import LocalStorage from '../../../../Helpers/storage'
import { fetchDiscoverAsync, fetchPopularMoviesAsync, fetchTrendingAsync } from '../../State/thunks/resultThunk'
import { setFullArray } from '../../State/reducers/resultReducer'

const Searcher = () => {
  const navigate= useNavigate()
  const dispatch= useAppDispatch()
  const user=LocalStorage.getCurrentUser()
  const { Dmovies, Dtv_shows, loading }= useAppSelector((state)=> state.getResults)
  useEffect(()=>{
      if(Dmovies.length<1){
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
      }
      
    },[])
  return (
    <main style={{padding:"15px 10px", overflowX:"hidden"}}>
        <center><Input style={{borderRadius:"2rem", backgroundColor:"var(--color-neutral-700"}} suffix={<SearchOutlined style={{fontSize:32, color:"var(--color-5-500)"}}  onClick={()=>{}} />}/></center>
        <Categories movies={Dmovies.slice(0,1)} title='Results' clickable/>
    </main>
  )
}

export default Searcher