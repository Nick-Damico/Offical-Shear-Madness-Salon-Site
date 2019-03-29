import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'

const ReviewCard = styled.div`
  padding: 4% 4% 1% 4%;
  height: 280px !important;
  background-color: ${props => props.theme.secondaryColor}
  display: flex !important;
  flex-direction: column !important;
`

const ReviewInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`

const ReviewPic = styled.img`
  border: 3px solid ${props => props.theme.colorWhite};
  border-radius: 50%;
  width: 60px;
`

const ReviewUsername = styled.h4`
  color: ${props => props.theme.colorBlack};
  margin-bottom: 0;
  margin-left: 4%;
  font-size: 2rem;
  font-weight: 100;
`

const ReviewText = styled.q`
  color: ${props => props.theme.colorBlack};
  font-size: 1rem;
`

const LinkContainer = styled.div`
  text-align: right;
  margin-top: auto;
`

const FacebookLink = styled.a`
  display: block;
  padding: 5px 10px;
  cursor: pointer;
  color: ${props => props.theme.colorBlack};
  text-decoration: underline;
`

export default props => {
  const { image, imageLg, username, review, className } = props

  return (
    <ReviewCard className={className}>
      <ReviewInner>
        <ReviewPic
          src={require(`../../images/reviewerphotos/${image}`)}
          srcset={require(`../../images/reviewerphotos/${imageLg}`) + '2x'}
          alt={username}
        />
        <ReviewUsername>{username}</ReviewUsername>
      </ReviewInner>
      <ReviewText>{_.truncate(review, { length: '180' })}</ReviewText>
      <LinkContainer>
        <FacebookLink href="https://www.facebook.com/pg/shearmadness941/reviews/">
          Full Review on Facebook
        </FacebookLink>
      </LinkContainer>
    </ReviewCard>
  )
}
