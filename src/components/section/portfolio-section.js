import React, { useState } from 'react';
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
import ContentEN from '../../content/en/portfolio/content.json';

export default function PorfolioSection() {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp(sort: {order: ASC, fields: fixed___originalName}, filter: {sizes: {originalName: {regex: "/project/"}}}) {
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

    const PortfolioSectionHeader = () => (
        <SectionHeader>
            <SectionTitle>{ContentEN.title}</SectionTitle>
        <AppBar position="static" color="default">
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Design" />
                <Tab label="Development" />
            </Tabs>
        </AppBar>
        </SectionHeader>
    );

    const PorfolioSectionBody = () => (
        <div>
            <TabPanel value={value} index={0}>
            </TabPanel>
            <TabPanel value={value} index={1}>
              {
                allImageSharp.edges.map((edge, index) => (
                  <PortfolioSectionItem
                    content={ContentEN.projects[index]}
                    image={<Img fluid={edge.node.fluid} />} />
                ))
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
            title={ContentEN.title}
            link='portfolio'
            sectionHeader={<PortfolioSectionHeader />}
            sectionBody={<PorfolioSectionBody />}
            placement={setPlacement()}
        ></Section>
    );
}
