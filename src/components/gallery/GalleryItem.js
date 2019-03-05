import React from 'react'
import styled from 'styled-components'

const GalleryImg = styled.img`
  width: 100%;
`

const GalleryItem = styled.a`
`

export default ({ imageSml, imageSml2x, imageLg, imageLg2x, alt }) => {
  
  return (
    <GalleryItem
      className="col"
      href={require(`../../images/gallery-preview/${imageLg}`)}
      data-lightbox="gallery1"
    >
      <GalleryImg
        src={require(`../../images/gallery-preview/${imageSml}`)}
        alt={alt}
      />
    </GalleryItem>
  )
}
