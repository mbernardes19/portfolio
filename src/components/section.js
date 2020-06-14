import React from 'react';
import styled from 'styled-components';

export default function Section({title, content, link, sectionHeader, sectionBody}) {
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
        <SectionContainer id={link}>
            { sectionHeader ? sectionHeader : <DefaultSectionHeader /> }
            { sectionBody ? sectionBody : <DefaultSectionBody /> }
        </SectionContainer>
    );
}

export const SectionContainer = styled.section`
    width: 100%;
`;

export const SectionHeader = styled.header`

`;

export const SectionTitle = styled.h2`
`;

export const SectionBody = styled.article`

`;