import React from 'react';
// Import styled-components Package
import styled from "styled-components";
import '../css/globalStyles.js';

// Import Components
import Layout from '../components/layout';
import { Navigation } from '../components/navigation';
import Header from '../components/header/index';
import About from '../components/about/index';
import PhotoReviews from '../components/photoReviewGrid/index';
import Services from '../components/services/index'


const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default () => (
  <Layout>
    <Navigation />
    <Header />
    <Main >
      <About />
      <PhotoReviews />
      <Services />
    </Main>
  </Layout>
);
