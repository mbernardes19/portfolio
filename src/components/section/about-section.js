import React from 'react';
import Section from './section';
import ContentEN from '../../content/en/about/content.json';
import placement from './placement';


export default function AboutSection() {
    const setPlacement = () => {
        const aboutSectionPlacement = placement;
        aboutSectionPlacement.width = '620px';
        aboutSectionPlacement.center = true;
        aboutSectionPlacement.left = false;
        aboutSectionPlacement.right = false;
        aboutSectionPlacement.topMargin = '2rem';
        aboutSectionPlacement.bottomMargin = '2rem';
        return aboutSectionPlacement;
    };

    return(
        <Section
            title={ContentEN.title}
            content={ContentEN.content}
            link='about'
            placement={setPlacement()}
        ></Section>
    );
}