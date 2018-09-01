import React from 'react';
import styled from 'styled-components';

import homeIcon from '../images/home-icon.svg';
import aboutIcon from '../images/about-icon.svg';
import serviceIcon from '../images/services-icon.svg';
import contactIcon from '../images/contact-icon.svg';
import Logo from '../images/logo.svg';

const Nav = styled.nav`
  position: absolute;
  background: ${props => props.theme.primaryColor};
  height: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  display: flex;
  border: 2px solid ${props => props.theme.primaryColor};
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 430px) {
    position: initial;
    border: none;
    background: transparent;
    width: 100%;
  }
`;

const MobileItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  line-height: 0.5rem;
  background: white;
  width: 24.25%;
  text-align: center;

  @media (min-width: 430px) {
    flex-direction: column-reverse;
  }
`;

const Icon = styled.img`
  width: 40px;
`;

export class Navigation extends React.Component {
  constructor() {
    super();

    this.handleResize = this.handleResize.bind(this);

    this.state = {
      mobile: true
    }
  }

  handleResize() {
    if(window.innerWidth > 429 && this.state.mobile) {
      this.setState({
        mobile: false
      });
    } else if (window.innerWidth < 430 && !this.state.mobile) {
      this.setState({
        mobile: true
      })
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  render() {
    const logoItem = <MobileItem><Icon src={Logo} /></MobileItem>;
    return(
      <Nav>
        <MobileItem><Icon src={homeIcon} />Home</MobileItem>
        <MobileItem><Icon src={aboutIcon} />About</MobileItem>
        {!this.state.mobile ? logoItem : null}
        <MobileItem><Icon src={serviceIcon} />Services</MobileItem>
        <MobileItem><Icon src={contactIcon} />Contact</MobileItem>
      </Nav>
    )
  };
};
