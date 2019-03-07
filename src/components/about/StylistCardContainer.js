import React from 'react'
import styled from 'styled-components'
import StylistCard from './stylistCard'
import StylistPic from '../../images/stylist.png'

const StylistContainer = styled.div`
  background-color: transparent;

  @media (min-width: 699px) {
    background-color: transparent;
  }
`

const TitleContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto 80px auto;
  padding: 1%;
  text-align: center;

  @media (min-width: 799px) {
    /* text-align: left; */
  }
`

const SectionTitle = styled.h3`
  color: blue;
  font-size: 2.2rem;
  color: ${props => props.theme.colorWhite};
`

const CardContainer = styled.div`
  justify-content: space-around;
  &:first-child {
    margin-bottom: 50px;
  }

  @media (min-width: 699px) {
    &:last-child {
      background-color: transparent;
    }
  }
`

const StylistCardContainer = ({ data }) => {
  return(
    <StylistContainer>
      <TitleContainer>
        <SectionTitle>Stylists</SectionTitle>
      </TitleContainer>
      <CardContainer className="row">
        {data.allStylistsJson.edges.map((edge,index) => (
          <StylistCard
            key={index}
            profilePic={StylistPic}
            name={edge.node.name}
            title={edge.node.title}
          />
        ))}
      </CardContainer>
    </StylistContainer>
  )
}

export default StylistCardContainer
