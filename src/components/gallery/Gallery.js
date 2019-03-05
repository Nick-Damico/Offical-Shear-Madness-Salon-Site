import React from 'react'
import styled from 'styled-components'
import GalleryItem from './GalleryItem'
import $ from 'jquery'
import 'lightbox2'
import 'lightbox2/dist/css/lightbox.min.css'
import galleryImages from './galleryImages'

const HeadingContainer = styled.div``

const GalleryContainer = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
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

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 0 1 auto;

  [class*='col'] {
    width: 48%;
    height: 100%;
    margin: 1% 1%;
  }

  @media (min-width: 835px) {
    [class*='col'] {
      width: 31.33333333%;
    }
  }
`

export default () => {
  let images = galleryImages.map((image, i) => (
    <GalleryItem
      key={`gallery-item-${i}`}
      imageSml={image.imageSml}
      imageSml2x={image.imageSml2x}
      imageLg={image.imageLg}
      imageLg2x={image.imageLg2x}
      alt={image.alt}
    />
  ))

  return (
    <section id="gallery">
      <HeadingContainer className="review-container__heading center-text">
        <SectionTitle>Salon Styles</SectionTitle>
        <Hr />
      </HeadingContainer>
      <GalleryContainer>
        <Row>{images}</Row>
      </GalleryContainer>
    </section>
  )
}
