import { Row, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'

const { Text }= Typography

const ComingSoon = () => {
  return (
    <Row justify={"center"}>
      <img src='./svg/loading.svg' className='pulsate' style={{width: "10vw", height:"10vw"}} />
      <Tex>Coming Soon ...</Tex>
    </Row>
  )
}

export default ComingSoon


const Tex= styled(Text)`
    animation: pulse 1s linear infinite alternate;
    line-height: 3;
    margin-left: 5px;
`