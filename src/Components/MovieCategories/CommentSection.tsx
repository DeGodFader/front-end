import { StarOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { TMDB_IMAGE_BASE_PATH } from '../../appEnv';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

interface CommentType {
  comments: {
    avatar_path: string;
    author: string;
    rating: number;
    content: string;
    created_at: string;
  }[];
}

const CommentSection: React.FC<CommentType> = ({ comments }) => {
  const [expandedComments, setExpandedComments] = useState<boolean[]>(
    new Array(comments.length).fill(false)
  );

  const toggleText = (index: number) => {
    const updatedExpandedComments = [...expandedComments];
    updatedExpandedComments[index] = !updatedExpandedComments[index];
    setExpandedComments(updatedExpandedComments);
  };

  return (
    <div style={{ marginBottom: 10 }}>
      <Title level={3}>Reviews and Comments</Title>
      <Space direction="vertical" style={{ gap: 10 }}>
        {comments.map((comment, index) => (
          <Card key={index} style={{ backgroundColor: 'var(--color-neutral-800)', border: 'none' }}>
            <Row justify="space-between">
              <Space align="start">
                <Avatar icon={<UserOutlined />} src={`${TMDB_IMAGE_BASE_PATH}${comment.avatar_path}`} size="large" />
                <div>
                  <Tex>{`${comment.author}`}</Tex>
                  <SubText>
                    <StarOutlined />
                    {comment.rating}
                  </SubText>
                </div>
              </Space>
              <Tex>{`${dayjs(comment.created_at).format('DD-MM-YY')}`}</Tex>
            </Row>
            <TextContainer expanded={expandedComments[index]}>
              <Content>{`${comment.content}`}</Content>
              <SeeMoreButton onClick={() => toggleText(index)}>
                {expandedComments[index] ? 'See less...' : 'See more...'}
              </SeeMoreButton>
            </TextContainer>
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default CommentSection;

const Tex = styled(Text)`
  font-size: 12px;
  display: block;
  font-family: Roboto !important;
  color: var(--color-white) !important;
`;

const SubText = styled(Text)`
  font-size: 10px !important;
  color: var(--color-neutral-300) !important;
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
