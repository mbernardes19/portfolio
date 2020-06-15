import React, { useState } from 'react';
import Section from './section';
import ContentEN from '../content/en/portfolio/content.json';
import AppBar from '@material-ui/core/AppBar';

export default function PorfolioSection() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const PortfolioSectionHeader = () => (
        <AppBar position="static" color="default">
        </AppBar>
    );

    const PorfolioSectionBody = () => (
        <div>
      </div>
    );

    return(
        <Section
            title={ContentEN.title}
            link='portfolio'
            sectionHeader={<PortfolioSectionHeader />}
            sectionBody={<PorfolioSectionBody />}
            width='620px'
            center
            topMargin='2rem'
            bottomMargin='2rem'
        ></Section>
    );
}
