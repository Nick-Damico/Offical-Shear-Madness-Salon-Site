import React from 'react';
// Import styled-components Package
import styled from "styled-components";
import '../css/globalStyles.js';

// Import Components
import Layout from '../components/layout';
import { Navigation } from '../components/navigation';
import Header from '../components/header/index';

export default () => (
  <Layout>
    <Navigation />
    <Header />
  </Layout>
);
