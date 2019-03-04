import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import ReviewCard from './ReviewCard'

const ReviewContainer = styled.section`
  margin-top: -1px;
  background-color: white;
`

const ReviewTitle = styled.h2`
  font-size: 2.2rem;
`

const HeadingContainer = styled.div`
  border-top-color: ${props => props.theme.primaryColor};
  border-top-style: solid;
  border-top-width: 4px;
`

const Heart = styled.span`
  color: teal;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allReviewsJson {
          edges {
            node {
              name
              review
              image
            }
          }
        }
      }
    `}
    render={data => (
      <ReviewContainer>
        <HeadingContainer className="review-container__heading center-text">
          <ReviewTitle>
            Our <Heart>♥</Heart> Customers
          </ReviewTitle>
        </HeadingContainer>
        {data.allReviewsJson.edges.map((edge, i) => (
            <ReviewCard
              username={edge.node.name}
              review={edge.node.review}
              image={edge.node.image}
            />
          )
        )}
      </ReviewContainer>
    )}
  />
)
