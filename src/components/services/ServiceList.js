import React from 'react'
import styled from 'styled-components'

const ColHeading = styled.h3`
  color: ${props => props.theme.colorBlack};
  font-size: 1.8rem;
  text-align: center;
  border-bottom: 2px solid ${props => props.theme.colorBlack};
  background-color: ${props => props.theme.colorWhite};
`

const ServiceList = styled.ul`
  color: ${props => props.theme.colorWhite};
  list-style: none;
  text-align: center;
`

const ServiceItem = styled.li`
  width: 100%;
  text-align: left;
  border-bottom: 3px dotted white;
  margin-bottom: 10px;
  letter-spacing: 1px;
`

const ServiceExtra = styled.li`
  font-weight: 300;
  text-align: left;
  background-color: white;
  padding: 4px 8px;
  color: black;
`

const Price = styled.span`
  float: right;
  font-style: italic;
`

export default ({ service }) => {
  const { name, services } = service
  let servicesSorted = services.sort((a, b) => a.price - b.price)
  let serviceItems = servicesSorted.map((service, index) => (
    <ServiceItem key={`service-item-${index}`}>
      {service.type}
      {service.extra ? '*' : null} <Price>${service.price}</Price>
    </ServiceItem>
  ))

  return (
    <>
      <ColHeading>{name}</ColHeading>
      <ServiceList>
        {serviceItems}
        {service.extra ? (
          <ServiceExtra>
            {service.extra.type} <Price>${service.extra.price}</Price>
          </ServiceExtra>
        ) : null}
      </ServiceList>
    </>
  )
}
