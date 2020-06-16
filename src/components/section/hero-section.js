import React from 'react';
import Section from './section';
import ContentEN from '../../content/en/hero/content.json';
import { SectionHeader, SectionBody, SectionTitle } from './section';
import styled from 'styled-components';
import placement from './placement';

export default function HeroSection() {
    const HeroSectionHeader = () => (
        <SectionHeader center fontSize='2rem'>
            <p style={{margin: 0}}>{ContentEN.greeting}</p>
            <h1 style={{fontFamily: 'Roboto'}}>{ContentEN.name}</h1>
        </SectionHeader>
    )
    
    const HeroSectionBody = () => (
        <SectionBody center fontSize='1.2rem'>
            <p style={{textAlign: 'center'}}>{ContentEN.content}</p>
        </SectionBody>
    )

    const setPlacement = () => {
        const aboutSectionPlacement = placement;
        aboutSectionPlacement.width = '620px';
        aboutSectionPlacement.center = true;
        aboutSectionPlacement.left = false;
        aboutSectionPlacement.right = false;
        aboutSectionPlacement.topMargin = '1rem';
        aboutSectionPlacement.bottomMargin = '2rem';
        console.log(aboutSectionPlacement);
        return aboutSectionPlacement;
    };

    return(
        <Section
            title={ContentEN.title}
            content={ContentEN.content}
            link="/"
            sectionHeader={<HeroSectionHeader />}
            sectionBody={<HeroSectionBody />}
            placement={setPlacement()}
        />
    );
}

const Greetings = styled.p`
    margin: 0px;
    fontFamily
`;