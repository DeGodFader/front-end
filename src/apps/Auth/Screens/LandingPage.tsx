import { Button, Flex, Row, Space, Typography } from 'antd'
import React, { useEffect } from 'react'

import { PrimaryButton } from '../../../Components/Buttons/Buttons'
import { AppleFilled, FacebookFilled, GoogleCircleFilled, GoogleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'
import { Node_Server } from '../../../appEnv'

const { Title, Text} = Typography

const LandingPage = () => {
    const navigate= useNavigate()
    // useEffect(()=>{
    //     const response=  fetch(
    //         `${Node_Server}/health`,
    //         {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         }
    //     )
    //     console.log(response)
    // },[])
  return (
    <Space direction="vertical" align="center" style={{width:"100dvw", gap:10}}>
        <Title style={{fontSize:'5dvh'}}>KinoVerse</Title>
        <img src='./svg/logo.svg' style={{height:"20dvh"}}/>
        <Text style={{fontSize:'4dvh'}}>It's Just Entertainment</Text>
        <div style={{width:"50%",marginTop:"0.2dvh", padding:25}}>
            <Text style={{ fontSize:12}}>You one Video Player For Everything Entertainment Just a Click Away. <br />We'er All Fun</Text>
        </div>
        <Space direction='vertical' style={{marginTop:'1rem'}}>
            <PrimaryButton>
                <Button type='primary' size='large' style={{width: "24rem", marginBottom:"2rem", fontWeight:"bold"}} onClick={()=>{navigate(`/sign-in`)}}>
                    LOGIN
                </Button>
            </PrimaryButton>
            <PrimaryButton>
                <Button type='primary' size='large' style={{width: "24rem", marginBottom:"1rem", fontWeight:"bold"}} onClick={()=>{navigate(`/sign-up`)}}>
                    SIGNUP
                </Button>
            </PrimaryButton>
            <Row justify={"space-between"}>
                <GoogleOutlined style={{fontSize:32, color:"var(--color-5-500)"}}/>
                <AppleFilled style={{fontSize:32, color:"var(--color-neutral-300)"}}/>
                <FacebookFilled style={{fontSize:32, color:"var(--color-info-500)", borderRadius:"3rem"}}/>
            </Row>
        </Space>
    </Space>
  )
}

export default LandingPage
