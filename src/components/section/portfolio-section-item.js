import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CodeRounded from '@material-ui/icons/CodeRounded';
import LanguageRounded from '@material-ui/icons/LanguageRounded';



export default function PortfolioSectionItem({content, image}) {
    const ProjectImage = () => image;
    
    const PrimaryButton = ({link, children}) => (
        <Button
            style={{backgroundColor: '#ff9000', marginRight: '1.3rem', color: 'white'}}
            variant="contained"
            startIcon={<LanguageRounded/>}
        >
            <a href={link} target="_blank">{children}</a>
        </Button>
    );
    
    const SecondaryButton = ({link, children}) => (
        <Button
            style={{backgroundColor: '#3A53A5', borderColor: '#f5f5f5', color: 'white'}}
            variant="outlined"
            startIcon={<CodeRounded/>}
        >
            <a href={link} target="_blank">{children}</a>
        </Button>
    );

    const showProjectTopics = () => content.items.map(item => <ProjectTopic key={item}>{item}</ProjectTopic>)
    
    const showProjectLinks = () => (
        <div>
            <PrimaryButton link={content.links[0].url}>{content.links[0].title.toUpperCase()}</PrimaryButton>
            <SecondaryButton link={content.links[1].url}>{content.links[1].title.toUpperCase()}</SecondaryButton>
        </div>
    );

    return (
        <ProjectContainer>
            <ProjectImageContainer>
                <ProjectImage/>
            </ProjectImageContainer>
            <ProjectBodyContainer>
                <ProjectTitle>{content.title}</ProjectTitle>
                <ProjectDescription>{content.description}</ProjectDescription>
                <ProjectTopicsContainer>
                    <ProjectTopicsTitle>{content.itemsTitle}</ProjectTopicsTitle>
                    <ProjectTopics>
                        {showProjectTopics()}
                    </ProjectTopics>
                    <ProjectLinks>
                        {showProjectLinks()}
                    </ProjectLinks>
                </ProjectTopicsContainer>
            </ProjectBodyContainer>
        </ProjectContainer>
    );
}

const ProjectContainer = styled.article`
    display: grid;
    grid-template-rows: .3fr 1fr;
    grid-row-gap: 2rem;
    margin-bottom: 2.5rem;
    width: 100%;
`;

const ProjectImageContainer = styled.div`
`;

const ProjectBodyContainer = styled.div`
`;

const ProjectTitle = styled.h3`
    margin-bottom: 0;
    font-size: 2rem;

`;

const ProjectDescription = styled.span`
    display: block;
    margin-bottom: 1rem;
`;

const ProjectTopicsContainer = styled.div`
`;

const ProjectTopics = styled.ul`
`;

const ProjectLinks = styled.div`
`;

const ProjectTopicsTitle = styled.h4`
    margin-bottom: 1rem;
`;

const ProjectTopic = styled.li`
`;

const PrimaryLinkButton = styled.button`
    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    border-color: #ff9000;
    padding: 5px 15px;
    margin-right: 1rem;
    font-size: .8rem;
    background-color: #ff9000
`;

const SecondaryLinkButton = styled.button`
    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    border-color: #f5f5f5;
    padding: 5px 15px;
    margin-right: 1rem;
    font-size: .8rem;
    background-color: #3A53A5
`;