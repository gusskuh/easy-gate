import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Provider } from 'rebass';

import Header from './header'
import './layout.css'

const Layout = ({ children, data, changeDirection, isLtr }) => (
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
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'איזיגייט הוא שער בטיחות לילדים המתקדם ביותר בעולם. הפתרון היחיד שקיים לחסימת גרמי מדרגות ללא קושי. לפתחים בגודל 70 - 100 ס"מ, עשוי מעץ יפה ואיכותי, להרכבה עצמית!'},
            { name: 'keywords', content: 'שער בטיחות, שער בטיחות לילדים, שער הבטיחות, שער הבטיחות לילדים, שער, בטיחות לילדים' },
          ]}
        >
          <link href="https://fonts.googleapis.com/css?family=Rubik:400,500,700&amp;subset=hebrew" rel="stylesheet" />
          <html lang="en" />
        </Helmet>
        <Header isLtr={isLtr} changeDirection={changeDirection} siteTitle={data.site.siteMetadata.title} />
        <Provider
          theme={{
            fonts: {
              sans: '"Rubik", Helvetica, sans-serif',
            }
          }}
        >
          {children}
        </Provider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
