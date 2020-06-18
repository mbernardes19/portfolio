import React, { useContext } from 'react';
import Section from './section';
import placement from './placement';
import languageContext from '../../content/language-context';


export default function AboutSection() {
    const { about } = useContext(languageContext);

    const setPlacement = () => {
        const aboutSectionPlacement = placement;
        aboutSectionPlacement.width = '620px';
        aboutSectionPlacement.center = true;
        aboutSectionPlacement.left = false;
        aboutSectionPlacement.right = false;
        aboutSectionPlacement.topMargin = '3rem';
        aboutSectionPlacement.bottomMargin = '2rem';
        return aboutSectionPlacement;
    };

    return(
        <Section
            title={about.title}
            content={about.content}
            link='about'
            placement={setPlacement()}
        ></Section>
    );
}