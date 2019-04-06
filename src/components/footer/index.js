import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InstagramIcon from '../../images/InstagramIcon.svg'
import FacebookIcon from '../../images/FacebookIcon.svg'

const Footer = styled.footer`
  background-color: ${props => props.theme.colorWhite};
  padding: 30px 0 65px 0;

  @media (min-width: 429px) {
    padding-bottom: 0;
  }
`

const Row = styled.div``

const Col = styled.div`
  flex: 0 0 92%;
  margin: 0 4% 20px 4%;

  @media (min-width: 499px) {
    margin-left: 4%;
    margin-right: 0;
    flex: 0 0 44%;
  }

  @media (min-width: 749px) {
    flex: 0 0 28%;
    &:nth-child(2) {
      text-align: center;
    }
  }
`

const HeadingTitle = styled.h4`
  color: ${props => props.theme.secondaryColor};
  font-size: 2rem;
  text-align: center;
`

const FooterText = styled.p`
  color: black;
  font-size: 16px;
`

const FooterSmallText = styled.small`
  font-size: 12px;
`

const Copyright = styled.div`
  color: ${props => props.theme.colorWhite};
  background-color: ${props => props.theme.primaryColor};
  text-align: center;
  padding: 10px;
`

const Link = styled.a`
  color: ${props => props.theme.secondaryColor};
`

const SocialDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
  max-width: 200px;
`

const SocialLink = styled.a`
  display: block;
  padding: 0 8px 8px;

  &:hover,
  &:active {
    fill: pink;
  }
`

const SocialIcon = styled.img`
  width: 40px;
`

const emailIcon = {
  fontSize: '44',
  color: `#61B5C1`,
  marginTop: '-3',
}

export default () => {
  const newDate = new Date()
  const currentYear = newDate.getFullYear()
  return (
    <Footer id="footer">
      <Row className="row">
        <Col>
          <HeadingTitle>Shear Madness</HeadingTitle>
          <FooterText>
            A full service beauty, bridal, and hair salon serving Gatlinburg,
            Pigeon Forge, Sevierville,
            and all of Sevier County. Hair Styles and cuts for everyone, hair
            highlights, coloring, bridal, waxing, tanning, and more.
          </FooterText>
        </Col>
        <Col>
          <HeadingTitle>Contact</HeadingTitle>
          <FooterText>
            212 Collier Drive | Sevierville, TN 37862
            <br />
            Salon Phone: <Link href="tel:8653661357">(865) 366-1357</Link>
            <br />
            <Link href="mailto:shearmadnessbeauty941@gmail.com" alt="">
              Email: ShearMadnessBeauty941@gmail.com
            </Link>
          </FooterText>
        </Col>
        <Col>
          <HeadingTitle>Follow Us</HeadingTitle>
          <SocialDiv>
            <SocialLink href="https://www.facebook.com/shearmadness941" aria-label="Facebook">
              <SocialIcon
                src={FacebookIcon}
                alt="shear madness beauty salon facbook link"
              />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/shearmadness_salon/?hl=en" aria-label="Instagram">
              <SocialIcon
                src={InstagramIcon}
                alt="shear madness beauty salon instagram link"
              />
            </SocialLink>
            <SocialLink href="mailto:shearmadnessbeauty941@gmail.com" aria-label="Email">
              <FontAwesomeIcon
                style={emailIcon}
                className="envelope-icon"
                icon="envelope-square"
                alt="Shear Madness Email Link"
              />
            </SocialLink>
          </SocialDiv>
        </Col>
      </Row>
      <Copyright>
        <FooterSmallText>
          Copyright @{currentYear} Shear Madness - All Rights Reserved
          <br />
          Developed | Designed by -{' '}
          <a href="http://nicholasdamico.net">NicholasDamico.net</a>
        </FooterSmallText>
      </Copyright>
    </Footer>
  )
}
