import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import is from 'styled-components';

const LoadingWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
`;
const LoadingTitle = styled.p`
  max-width: 50%;
  line-height: 1.4;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;
const LoadingAuthor = styled.p`
  font-weight: normal;
  font-size: 0.9rem;
  color: rgba(189, 189, 189, 1);
  margin: 0.6rem 0 2rem 0;
  display: block;
`;

const LoadingKeyframs = keyframes`
 to {  transform: rotate(1turn) }
`;

const LoadingItem = styled.div`
  width: 35px;
  height: 35px;
  display: inline-block;
  border: 5px solid rgba(189, 189, 189, 0.25);
  border-left-color: rgba(3, 155, 229, 1);
  border-top-color: rgba(3, 155, 229, 1);
  border-radius: 50%;
  animation: ${LoadingKeyframs} infinite linear;
`;

const Loading = ({ loading, speed = 3000, title, author }) => {
  const [isloading, setLoading] = useState(loading);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  if (!isloading) return null;

  const itemStyle = {
    animationDuration: speed + 'ms'
  };
  return (
    <LoadingWrapper>
      <LoadingTitle>{title}</LoadingTitle>
      <LoadingAuthor> {author}</LoadingAuthor>
      <LoadingItem style={itemStyle} />
    </LoadingWrapper>
  );
};

export default Loading;
