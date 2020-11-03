import React, { useState, useContext } from 'react';
import Section from './section';
import AppBar from '@material-ui/core/AppBar';
import placement from './placement';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PortfolioSectionItem from './portfolio-section-item';
import {SectionHeader, SectionTitle } from './section';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import TabPanel from '../tab/tabpanel';
import LanguageContext from '../../content/language-context';
import { withStyles } from '@material-ui/core/styles';

export default function PorfolioSection() {
  const { currentLang } = useContext(LanguageContext);
  const { portfolio } = currentLang;

  const projectsImages = useStaticQuery(graphql`
    query {
      devImages: allImageSharp(sort: {order: ASC, fields: fixed___originalName}, filter: {sizes: {originalName: {regex: "/dev/"}}}) {
        edges {
          node {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const PortfolioSectionTabs = withStyles({
      indicator: {
        backgroundColor: 'rgb(255, 144, 0)',
      },
    })(Tabs);

    const PortfolioSectionHeader = () => (
            <SectionHeader>
              <SectionTitle>{portfolio.title}</SectionTitle>
        </SectionHeader>
    );

    const PorfolioSectionBody = () => (
        <div>
            <TabPanel value={value} index={0}>
              {
                projectsImages.devImages.edges.map((edge, index) => {
                  const {hasGif} = portfolio.development.projects[index];
                  if (hasGif) {
                    return (
                      <PortfolioSectionItem
                        content={portfolio.development.projects[index]} 
                        type="development"
                      />
                    )
                  }
                  return (
                    <PortfolioSectionItem
                      content={portfolio.development.projects[index]}
                      image={<Img fluid={edge.node.fluid}/>}
                      type="development" 
                    />
                  )
                })
              }
            </TabPanel>
      </div>
    );

    const setPlacement = () => {
        const portfolioSectionPlacement = placement;
        portfolioSectionPlacement.width = '620px';
        portfolioSectionPlacement.center = true;
        portfolioSectionPlacement.left = false;
        portfolioSectionPlacement.right = false;
        portfolioSectionPlacement.topMargin = '3rem';
        portfolioSectionPlacement.bottomMargin = '2rem';
        return portfolioSectionPlacement;
    };

    return(
        <Section
            title={portfolio.title}
            link='portfolio'
            sectionHeader={<PortfolioSectionHeader />}
            sectionBody={<PorfolioSectionBody />}
            placement={setPlacement()}
        ></Section>
    );
}
