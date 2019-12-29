import React from 'react'
import styled from 'styled-components'
import { TweenMax } from 'gsap/all'

// Import icons for navigation
import homeIcon from '../images/home-icon.svg'
import aboutIcon from '../images/about-icon.svg'
import serviceIcon from '../images/services-icon.svg'
import contactIcon from '../images/contact-icon.svg'
import Logo from '../images/logo.svg'

// Styled Components
const Nav = styled.nav`
  position: fixed;
  background: ${props => props.theme.primaryColor};
  height: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  opacity: 0;

  display: flex;
  border: 2px solid ${props => props.theme.primaryColor};
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 429px) {
    position: absolute;
    top: 0;
    border: none;
    background: transparent;
    width: 100%;
    padding-top: 30px;
  }
`

const MobileItem = styled.a`
  display: flex;
  font-family: 'SignPainter', sans-serif;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  line-height: 0.5rem;
  background: white;
  width: 24.25%;
  height: 100%;
  text-align: center;
  transition: all 500ms ease, background-color 100ms;

  @media (min-width: 429px) {
    flex-direction: column-reverse;
    background: transparent;
    color: ${props => props.theme.colorWhite};
    line-height: 1.5rem;
    min-height: 80px;
  }

  @media (min-width: 499px) {
    font-size: 1.4rem;
  }

  @media (min-width: 699px) {
    font-size: 2rem;
    text-shadow: ${props => props.theme.textShadow};

    &:hover img.icon {
      transform: translateY(8px);
    }
  }
`

const Icon = styled.img`
  width: 40px;
  transition: all 500ms ease;

  @media (min-width: 429px) {
    width: ${props => (props.logo ? '140px' : '40px')};

  }

  @media (min-width: 499px) {
    width: ${props => (props.logo ? '175px' : '40px')};

  }

  @media (min-width: 699px) {
    width: ${props => (props.logo ? '200px' : '55px')};
    font-size: 1.6rem;
  }

  @media (min-width: 999px) {
    width: ${props => (props.logo ? '300px' : '55px')};
  }
`

// Export of Class Component
export class Navigation extends React.Component {
  constructor() {
    super()

    this.handleResize = this.handleResize.bind(this)
    this.nav = React.createRef();

    this.state = {
      mobile: false,
    }
  }

  // Handles scrolling to Section on Naviation Item click.
  scrollTo(e) {
    e.stopPropagation();
    e.preventDefault()
    let target = e.target
    target = target.nodeName !== "A" ? target.parentElement : target;
    let sectionAnchor = target.getAttribute('href')

    if (typeof window !== 'undefined') {
      TweenMax.to(window, 1, { scrollTo: { y: sectionAnchor, offsetY: 0 } })
    }
  }

  handleResize() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 429 && this.state.mobile) {
        this.setState({
          mobile: false,
        })
      } else if (window.innerWidth < 430 && !this.state.mobile) {
        this.setState({
          mobile: true,
        })
      }
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize, {passive: false});
      if (window.innerWidth < 430) {
        this.setState({
          mobile: true,
        });
      }
      TweenMax.to(this.nav.current, 1, { opacity: 1, delay: 0.8 });
    }
  }

  render() {
    const logoItem = (
      <MobileItem href="#home">
        <Icon style={{paddingTop: '40px'}} logo src={Logo} alt="Shear Madness Beauty Salon" />
      </MobileItem>
    )
    return (
      <Nav innerRef={this.nav}>
        <MobileItem onClick={this.scrollTo} href="#home">
          <Icon className="icon" src={homeIcon} alt="Home Section" />
          Home
        </MobileItem>
        <MobileItem onClick={this.scrollTo} href="#about">
          <Icon className="icon" src={aboutIcon} alt="About Section" />
          About
        </MobileItem>
        {!this.state.mobile ? logoItem : null}
        <MobileItem onClick={this.scrollTo} href="#services">
          <Icon className="icon" src={serviceIcon} alt="Services Section" />
          Services
        </MobileItem>
        <MobileItem onClick={this.scrollTo} href="#contact">
          <Icon className="icon" src={contactIcon} alt="Contact Section" />
          Contact
        </MobileItem>
      </Nav>
    )
  }
}
