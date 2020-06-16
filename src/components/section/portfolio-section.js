import React, { useState } from 'react';
import Section from './section';
import ContentEN from '../../content/en/portfolio/content.json';
import AppBar from '@material-ui/core/AppBar';
import placement from './placement';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PortfolioSectionItem from './portfolio-section-item';
import {SectionHeader, SectionTitle } from './section';


export default function PorfolioSection() {
    function TabPanel(props) {
        const { children, value, index } = props;
      
        return (
          <div
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
          >
            {value === index && (
              <Box style={{backgroundColor: '#3A53A5'}} padding={3}>
                <div>{children}</div>
              </Box>
            )}
          </div>
        );
      }
      

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
                <PortfolioSectionItem title="teste" />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
      </div>
    );

    const setPlacement = () => {
        const portfolioSectionPlacement = placement;
        portfolioSectionPlacement.width = '620px';
        portfolioSectionPlacement.center = true;
        portfolioSectionPlacement.left = false;
        portfolioSectionPlacement.right = false;
        portfolioSectionPlacement.topMargin = '2rem';
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
