import React from 'react'
import { Button, Typography } from 'antd'
import styled from 'styled-components'
import { HomeFilled, ReloadOutlined } from '@ant-design/icons'


const { Title } = Typography

const FallBack = () => {
    const reloadPage = () => window.location.reload()
    const goHome = () => window.location.assign("/")
  return (
    <Error
      style={{position: "absolute", width:"100%",height:"100dvh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", overflow:"hidden"}}
    >
      <div style={{color:"var(--color-danger)"}}>
        <img src='./svg/errorBoundary.svg' />
      </div>
      <div className='text'>
        <Title>Error Occured</Title>
        <Title className='show'>Please check your connection</Title>
      </div>
      <div className='buttons'>
        <Button type='primary' size='large' icon={<ReloadOutlined />} onClick={reloadPage}>
          Reload Page
        </Button>
        <Button type='default' size='large' icon={<HomeFilled />} onClick={goHome}>
          Go Home
        </Button>
      </div>
    </Error>
  )
}

export default FallBack


const Error = styled.div`
  @media screen and (min-width: 600px) {
    div>img{
      width: 30vw;
      height: 30vh;
      color:"var(--color-danger)";
    }
    .text{
      text-align: center;
      padding: 0;
      margin-bottom: 10px;
      h1{
        font-family: Chewy;
        font-size: 10rem;
        margin-bottom: 0;
        margin-top: 5px;
        color: var(--color-primary);
        
      }
      .show{
        font-family: QuicSand;
        font-size: 5rem;
        margin-top: 0;
        color: var(--color-black)
      }
    }
    .buttons{
      display: flex;
      align-items: center;
      gap: 6rem;
  
      & .ant-btn {
        font-weight: 600;
        font-family: Poppins, sans-serif;
        font-size: 2rem;
        width:20rem;
        height: 6rem;
        border-radius: 6px;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
  
      & .ant-btn-primary {
        background: var(--color-primary-3);
        color: white;
        &:hover {
          background: var(--color-primary);
          color: white !important;
          border-color: var(--color-primary) !important;
        }
      }
  
      & .ant-btn-default {
        color: var(--color-primary-3);
        border: 3px solid var(--color-primary-3);
  
        &:hover {
          background: var(--color-primary);
          color: white !important;
          border-color: var(--color-primary) !important;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    div>img{
      width: 60vw;
      color:"var(--color-danger)";
    }
    .text{
      text-align: center;
      padding: 0;
      margin-bottom: 10px;
      h1{
        font-family: Chewy;
        font-size: 5rem;
        margin-bottom: 0;
        margin-top: 5px;
        color: var(--color-primary);
        
      }
      .show{
        font-family: QuicSand;
        font-size: 2.5rem;
        margin-top: 0;
        color: var(--color-black)
      }
    }
    .buttons{
      display: flex;
      align-items: center;
      gap: 1rem;
  
      & .ant-btn {
        font-weight: 600;
        font-family: Poppins, sans-serif;
        font-size: 1.6rem;
        width:16rem;
        height: 5rem;
        border-radius: 6px;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
  
      & .ant-btn-primary {
        background: var(--color-primary-3);
        color: white;
        &:hover {
          background: var(--color-primary);
          color: white !important;
          border-color: var(--color-primary) !important;
        }
      }
  
      & .ant-btn-default {
        color: var(--color-primary-3);
        border: 3px solid var(--color-primary-3);
  
        &:hover {
          background: var(--color-primary);
          color: white !important;
          border-color: var(--color-primary) !important;
        }
      }
    }
  }
  
  
`