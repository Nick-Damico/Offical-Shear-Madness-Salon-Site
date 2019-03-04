import React from 'react'
// Import styled-components Package
import styled from 'styled-components'
import '../css/globalStyles.js'

// Import Components
import Layout from '../components/layout'
import { Navigation } from '../components/navigation'
import Header from '../components/header/index'
import About from '../components/about/index'
import Reviews from '../components/reviews/ReviewsContainer'
import Services from '../components/services/index'
import Location from '../components/location/index'
import Footer from '../components/footer/index'
import GoogleMap from '../components/GoogleMap'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default () => (
  <Layout>
    <Navigation />
    <Header />
    <Main>
      <About />
      <Reviews />
      <Services />
      <Location />
      <GoogleMap />
    </Main>
    <Footer />
  </Layout>
)
