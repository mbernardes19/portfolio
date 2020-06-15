import React from 'react';
import styled from 'styled-components';

export default function Section({title, content, link, sectionHeader, sectionBody, width, center, topMargin, bottomMargin}) {
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
        <SectionContainer id={link} width={width} center={center} topMargin={topMargin} bottomMargin={bottomMargin}>
            { sectionHeader ? sectionHeader : <DefaultSectionHeader /> }
            { sectionBody ? sectionBody : <DefaultSectionBody /> }
        </SectionContainer>
    );
}

export const SectionContainer = styled.section`
    max-width: ${props => props.width ? props.width : '100%'};
    margin: ${props => props.center ? '0 auto' : '' };
    margin-top: ${props => props.topMargin ? props.topMargin : ''};
    margin-bottom: ${props => props.bottomMargin ? props.bottomMargin : ''};
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