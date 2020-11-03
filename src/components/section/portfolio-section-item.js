import React, {lazy} from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CodeRounded from '@material-ui/icons/CodeRounded';
import LanguageRounded from '@material-ui/icons/LanguageRounded';
import PortfolioGif from './PortfolioGif';

export default function PortfolioSectionItem({type, content, image}) {

    const ProjectImage = () => {
        return content.hasGif ? <PortfolioGif /> : image;
    }

    const PrimaryButton = ({link, children}) => {
        return (
            <Button
                style={{backgroundColor: '#ff9000', marginTop: '1.1rem', marginRight: '1.3rem', color: 'white'}}
                variant="contained"
                startIcon={<LanguageRounded/>}
            >
                <a href={link} target="_blank">{children}</a>
            </Button>
        )
    };
    
    const SecondaryButton = ({link, children, style}) => (
        <Button
            style={{backgroundColor: '#3A53A5', marginTop: '1.1rem', borderColor: '#f5f5f5', color: 'white', ...style}}
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
            <SecondaryButton style={{marginRight: '1rem'}} link={content.links[1].url}>{content.links[1].title.toUpperCase()}</SecondaryButton>
            {
                content.links[2] ?
                    <SecondaryButton link={content.links[2].url}>{content.links[2].title.toUpperCase()}</SecondaryButton>
                :
                    <></>
            }
        </div>
    );

    return (
        <ProjectContainer>
            <ProjectImageContainer gif={content.hasGif}>
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
                    { 
                        type === 'development' ? 
                            <ProjectLinks> {showProjectLinks()} </ProjectLinks> : <NoProjectLinks />
                    }
                </ProjectTopicsContainer>
            </ProjectBodyContainer>
        </ProjectContainer>
    );
}

const ProjectContainer = styled.article`
    display: grid;
    grid-template-rows: .3fr;
    grid-row-gap: 2rem;
    margin-bottom: 4rem;
    width: 100%;
`;

const ProjectImageContainer = styled.div`
    display: ${props => props.gif ? 'flex' : 'inherit'};
    justify-content: ${props => props.gif ? 'center' : 'inherit'};
`;

const ProjectBodyContainer = styled.div`
`;

const ProjectTitle = styled.h3`
    margin-bottom: 5px;
    font-size: 2rem;

`;

const ProjectDescription = styled.span`
    display: block;
    margin-bottom: 1rem;
`;

const ProjectTopicsContainer = styled.div`
`;

const ProjectTopics = styled.ul`
    margin-bottom: 0px;
`;

const ProjectLinks = styled.div`
`;

const NoProjectLinks = styled.div`
`;

const ProjectTopicsTitle = styled.h4`
    margin-bottom: 1rem;
`;

const ProjectTopic = styled.li`
`;