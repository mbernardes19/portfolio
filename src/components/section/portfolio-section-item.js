import React from 'react';
import styled from 'styled-components';
// import Image from "../components/image"

export default function PortfolioSectionItem({title, description, content, image}) {
    return (
        <ProjectContainer>
            <ProjectLeft>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
                <ProjectTopicsContainer>
                    <ProjectTopics>
                        <ProjectTopic></ProjectTopic>
                    </ProjectTopics>
                </ProjectTopicsContainer>
            </ProjectLeft>
            <ProjectRight>
                <ProjectImage/>
            </ProjectRight>
        </ProjectContainer>

    );
}

const ProjectImage= styled.img`
    
`;

const ProjectContainer = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr;
`;

const ProjectLeft = styled.div`
    display: flex;
    flex-flow: column wrap;
`;

const ProjectRight = styled.div`
`;

const ProjectTitle = styled.h3`
`;

const ProjectDescription = styled.span`
`;

const ProjectTopicsContainer = styled.div`
`;

const ProjectTopics = styled.ul`
`;

const ProjectTopic = styled.li`
`;