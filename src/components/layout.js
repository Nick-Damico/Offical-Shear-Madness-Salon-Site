import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../css/globalStyles.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelopeSquare)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1800px;
  &:last-child {
    margin-bottom: 0;
  }
`

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={`${
            data.site.siteMetadata.title
          } | A Full service beauty and bridal hair salon. Specializing in current trend hairstyles for men and women. Serving Gatlinburg, Pigeon Forge, Sevierville, and all of Sevier County.`}
          meta={[
            {
              name: 'description',
              content:
                'Full Service Beauty Salon serving Gatlinburg, Pigeon Forge, Sevierville, and all of Sevier County. Hair Styles and cuts for everyone, hair highlights and coloring, bridal, waxing, tanning, and more.',
            },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
      </>
    )}
  />
)
