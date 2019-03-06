import React from 'react'
import styled from 'styled-components'

const GalleryImg = styled.img`
  width: 100%;
  display: flex;
  opacity: 0.8;
  transform: opacity 0.8s ease-in-out;

  &:hover {
    opacity: 1;
  }
`

const GalleryItem = styled.a`
  background-color: ${props => props.theme.primaryColor};

  &:nth-child(even) {
    background-color: ${props => props.theme.secondaryColor};
  }
`

export default ({ imageSml, imageSml2x, imageLg, imageLg2x, alt,handleLoad }) => {
  let itemRef = React.createRef()
  return (
    <GalleryItem
      className="col"
      href={require(`../../images/gallery-preview/${imageLg}`)}
      data-lightbox="gallery1"
      innerRef={itemRef}
      onLoad={e => handleLoad(e,itemRef)}
    >
      <GalleryImg
        src={require(`../../images/gallery-preview/${imageSml}`)}
        alt={alt}
      />
    </GalleryItem>
  )
}
