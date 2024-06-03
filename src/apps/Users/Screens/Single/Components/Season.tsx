import { Row, Typography } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react'
import styled from 'styled-components';
import ComingSoon from '../../../../../Components/ComingSoon/ComingSoon';

const {Title, Text} = Typography

interface SeasonType {
    data:{
        air_date: string | null;
        episode_count: number;
        id: number;
        name: string;
        overview: string;
        poster_path: string;
        season_number: number;
        vote_average: number;
    }
}

const Season: React.FC<SeasonType> = ({data}) => {
    console.log(data)
    const [expandedComments, setExpandedComments] = useState<boolean>(false);
  
    const toggleText = () => {
      setExpandedComments(true);
    };
  return (
    <div>
        <Title style={{fontFamily: "Roboto", fontSize: 18}}>{`Season ${data.name}`}</Title>
        <TextContainer expanded={expandedComments}>
          <Content>{`${data.overview}`}</Content>
          <SeeMoreButton onClick={() => toggleText()}>
            {expandedComments ? '' : 'See more...'}
          </SeeMoreButton>
        </TextContainer>
        <Row justify={"space-around"} style={{width:"100%", color: "white"}}>
            <Text>{data.episode_count} Episodes </Text>
            {data.air_date? <Text>{ dayjs(data.air_date).format("YYYY")}</Text>: null}
        </Row>
        
    </div>
  )
}

export default Season


const TextContainer = styled.div<{ expanded: boolean }>`
  ${({ expanded }) =>
    expanded
      ? `
    max-height: auto;
    & span.ant-typography {
        display: block !important;
    }
 `
      : `
    max-height: 10rem;
    & span.ant-typography {
        overflow: hidden !important;
    }
 `}
`;

const Content = styled(Text)`
  font-size: 12px;
  font-family: QuickSand !important;
  color: var(--color-white) !important;
  line-height: 15px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const SeeMoreButton = styled(Text)`
  display: in-line;
  font-size: 10px;
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
`;