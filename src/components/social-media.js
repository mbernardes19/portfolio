import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";
import IconButton from '@material-ui/core/IconButton';
import ContentEN from '../content/en/social-media/content.json';

export default function SocialMediaLinks ({github, twitter, linkedin}) {
    const Twitter = () => (
        <IconButton>
            <a href={ContentEN.twitter} target="_blank">
                <FaTwitter/>
            </a>
        </IconButton>
    )

    const GitHub = () => (
        <IconButton>
            <a href={ContentEN.github} target="_blank">
                <FaGithub/>
            </a>
        </IconButton>
    )

    const LinkedIn = () => (
        <IconButton>
            <a href={ContentEN.linkedin} target="_blank">
                <FaLinkedin/>
            </a>
        </IconButton>
    )
    return (
        <IconContext.Provider value={{ color: "white", size: '3rem' }}>
            <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                {github ? <GitHub/> : <></>}
                {twitter ? <Twitter/> : <></>}
                {linkedin ? <LinkedIn/> : <></>}
            </div>
        </IconContext.Provider>
    )
}
