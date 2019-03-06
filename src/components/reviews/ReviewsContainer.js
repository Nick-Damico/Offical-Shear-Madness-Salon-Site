// Custom styles for 'slick-carousel' including 'next,previous' buttons
// Located in 'css/globalStyles.js'
import React, { Component } from 'react'
import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import ReviewCard from './ReviewCard'

const isEven = value => {
  if (value % 2 === 0) return true
  else return false
}

const HeadingContainer = styled.div``

const ReviewContainer = styled.section`
  margin-top: -1px;
  background-color: ${props => props.theme.colorWhite};
  padding: 0 0 40px;
`

const ReviewTitle = styled.h2`
  position: relative;
  display: inline-block;
  color: ${props => props.theme.primaryColor}
  background: white;
  font-size: 2.2rem;
  padding: 8px 10px;
  z-index: 90;

  @media (min-width: 800px) {
    font-size: 2.4rem;
  }
`
const Heart = styled.span`
  color: ${props => props.theme.secondaryColor};
`
const Hr = styled.hr`
  position: relative;
  top: -49px;
  z-index: 80;
  border: 0;
  height: 2px;
  width: 90%;
  margin: 0 auto;
  background-image: -webkit-linear-gradient(
    left,
    #f0f0f0,
    ${props => props.theme.secondaryColor},
    #f0f0f0
  );
  background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
`

class ReviewsContainer extends Component {
  constructor() {
    super()

    this.carousel = React.createRef()
  }
  componentDidMount() {
    let $carousel = $(this.carousel.current)
    $carousel.slick({
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          },
        },
      ],
    })
  }

  render() {
    const { data } = this.props
    return (
      <ReviewContainer id="review-container">
        <HeadingContainer className="review-container__heading center-text">
          <ReviewTitle>
            Customer Reviews <Heart>♥</Heart>
          </ReviewTitle>
          <Hr />
        </HeadingContainer>
        <div
          style={{ width: '95%', margin: '0 auto', maxWidth: '1200px' }}
          ref={this.carousel}
          className="slick-carousel__container"
        >
          {data.allReviewsJson.edges.map((edge, i) => (
            <ReviewCard
              className={isEven(i) ? 'color-even' : 'color-odd'}
              key={`slick-slide-${i}`}
              username={edge.node.name}
              review={edge.node.review}
              image={edge.node.image}
              imageLg={edge.node.imageLg}
            />
          ))}
        </div>
      </ReviewContainer>
    )
  }
}

/*
 Graphql query renders the above ReviewsContainer with
 retrieved query data in props.
*/
export default props => (
  <StaticQuery
    query={graphql`
      query {
        allReviewsJson {
          edges {
            node {
              name
              review
              image
              imageLg
            }
          }
        }
      }
    `}
    render={data => <ReviewsContainer data={data} {...props} />}
  />
)
