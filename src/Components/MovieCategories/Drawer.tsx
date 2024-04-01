import React from 'react'
import { Card as AntCard, Typography } from 'antd'
import styled from 'styled-components/dist/constructors/styled'
import { GenreMap } from '../../Helpers/constants'

interface DrawerType{
    movies:{
        image: string
    }[]
}

const { Text }= Typography
const Drawer: React.FC<DrawerType> = ({ movies }) => {
  return (
    <Scroller>
        <Wrapper>
            {movies.map((movie, index) => (
            <Card key={index}>
                <img src={`${movie.image}`} width={160} height={195}/>
            </Card>
            ))}
        </Wrapper>
    </Scroller>
  )
}

export default Drawer

const Scroller= styled.div`
    overflow-x: auto;
    white-space: nowrap;
    width: 100%; 
    padding-bottom: 16px; 
    scrollbar-width: none; 
    -ms-overflow-style: none; 
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
    margin-right: 5px; 
    margin-bottom: 16px;
    background: transparent;
    border: none;

    & .ant-card-body {
        padding:0px !important;
    }
`

