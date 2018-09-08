import React from 'react';
import styled from 'styled-components';

const ReviewCard = styled.figure`
  padding: 4% 4% 1% 4%;
`;

const ReviewInner = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewPic = styled.img`
  border: 3px solid ${props => props.theme.colorWhite};
  border-radius: 50%;
  width: 64px;
`;

const ReviewUsername = styled.h4`
  color: ${props => props.theme.colorWhite};
  margin-bottom: 0;
  margin-left: 4%;
  font-size: 2rem;
  font-weight: 100;
`;

const ReviewText = styled.p`
  color: ${props => props.theme.colorWhite};
  font-size: 1rem;
`;

export default (props) => {
  const {profilePic, username, review, className} = props;

  return (
    <ReviewCard className={className}>
      <ReviewInner>
        <ReviewPic src={profilePic} alt={username} />
        <ReviewUsername>{username}</ReviewUsername>
      </ReviewInner>
      <ReviewText>{review}</ReviewText>
    </ReviewCard>
  );
};
