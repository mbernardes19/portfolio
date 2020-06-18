import React from 'react';
import styled from 'styled-components';

export default function Section({title, content, link, sectionHeader, sectionBody, placement}) {
    const DefaultSectionHeader = () => (
        <SectionHeader>
            <SectionTitle>{title}</SectionTitle>
        </SectionHeader>
    );
    
    const DefaultSectionBody = () => (
        <SectionBody>
            {content}
        </SectionBody>
    );

    return (
        <SectionContainer id={link} placement={placement}>
            { sectionHeader ? sectionHeader : <DefaultSectionHeader /> }
            { sectionBody ? sectionBody : <DefaultSectionBody /> }
        </SectionContainer>
    );
}

export const SectionContainer = styled.section`
    max-width: ${props => props.placement.width ? props.placement.width : '100%'};
    margin: ${props => props.placement.center ? '0 auto' : '' };
    margin-top: ${props => props.placement.topMargin ? props.placement.topMargin : ''};
    margin-bottom: ${props => props.placement.bottomMargin ? props.placement.bottomMargin : ''};
`;

export const SectionHeader = styled.header`
    display: flex;
    flex-flow: column wrap;
    font-size: ${props => props.fontSize};
    align-items: ${props => props.center ? 'center' : props.left ? 'flex-start' : props.right ? 'flex-end' : ''}
`;

export const SectionTitle = styled.h2`
`;

export const SectionBody = styled.article`
    display: flex;
    flex-flow: column wrap;
    font-size: ${props => props.fontSize};
    align-items: ${props => props.center ? 'center' : props.left ? 'flex-start' : props.right ? 'flex-end' : ''}
`;