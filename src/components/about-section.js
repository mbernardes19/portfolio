import React from 'react';
import Section from './section';
import ContentEN from '../../public/content/en/about/content.json'

export default function AboutSection() {
    return(
        <Section
            title={ContentEN.title}
            content={ContentEN.content}
            link='about'
            width='620px'
            center
            topMargin='2rem'
            bottomMargin='2rem'
        ></Section>
    );
}