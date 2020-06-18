import React from 'react';
import Section from './section';
import ContentEN from '../../content/en/hero/content.json';
import { SectionHeader, SectionBody, SectionTitle } from './section';
import styled from 'styled-components';
import placement from './placement';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SocialMediaLinks from '../social-media';

export default function HeroSection() {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "matheus.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    const HeroSectionHeader = () => (
        <SectionHeader center fontSize='2rem'>
            <p style={{margin: 0, fontWeight: 400, fontSize: '1.5rem', marginBottom: '.3rem'}}>{ContentEN.greeting}</p>
            <h1 style={{fontFamily: 'Roboto', fontWeight: 500, fontSize: '3rem'}}>{ContentEN.name}</h1>
        </SectionHeader>
    )
    
    const HeroSectionBody = () => (
        <SectionBody center fontSize='1.2rem'>
            <p style={{textAlign: 'center', fontWeight: 400, marginBottom: '2.5rem'}}>{ContentEN.content}</p>
            <SocialMediaLinks github twitter linkedin/>
        </SectionBody>
    )

    const setPlacement = () => {
        const aboutSectionPlacement = placement;
        aboutSectionPlacement.width = '620px';
        aboutSectionPlacement.center = true;
        aboutSectionPlacement.left = false;
        aboutSectionPlacement.right = false;
        aboutSectionPlacement.topMargin = '1rem';
        aboutSectionPlacement.bottomMargin = '10rem';
        return aboutSectionPlacement;
    };

    return(
        <div style={{ margin: '1rem auto 0px auto', padding: '20px 40px 0px 40px', maxWidth: `620px` }}>
        <Img fluid={data.file.childImageSharp.fluid} />
            <Section
                title={ContentEN.title}
                content={ContentEN.content}
                link="/"
                sectionHeader={<HeroSectionHeader />}
                sectionBody={<HeroSectionBody />}
                placement={setPlacement()}
            />
        </div>
    );
}

const Greetings = styled.p`
    margin: 0px;
    fontFamily
`;