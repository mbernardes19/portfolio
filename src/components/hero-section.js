import React from 'react';
import Section from './section';
import ContentEN from '../content/en/hero/content.json';
import { SectionHeader, SectionBody, SectionTitle } from './section';
import styled from 'styled-components';

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

    return(
        <Section
            title={ContentEN.title}
            content={ContentEN.content}
            link="/"
            sectionHeader={<HeroSectionHeader />}
            sectionBody={<HeroSectionBody />}
            width='620px'
            center
            topMargin='1rem'
            bottomMargin='2rem'
        />
    );
}

const Greetings = styled.p`
    margin: 0px;
    fontFamily
`;