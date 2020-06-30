import React, { useState, useContext } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";
import IconButton from '@material-ui/core/IconButton';
import ContentEN from '../content/en/social-media/content.json';
import { MdEmail } from 'react-icons/md';
import  Snackbar from '@material-ui/core/Snackbar';
import LanguageContext from '../content/language-context';

export default function SocialMediaLinks ({github, twitter, linkedin, email}) {
    const [isCopied, setIsCopied] = useState(false);
    const { currentLang } = useContext(LanguageContext);
    const { messages } = currentLang;

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

    const Email = () => (
        <IconButton onClick={() => copyToClipboard(ContentEN.email)}>
            <MdEmail/>
        </IconButton>
    )

    const copyToClipboard = text => {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setIsCopied(true);
    }

    const Alert = () => (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            open={isCopied}
            autoHideDuration={3000}
            message={messages.emailCopied}
            onClose={() => setIsCopied(false)}
        />
    )

    return (
        <IconContext.Provider value={{ color: "white", size: '1.7rem' }}>
            <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                {github ? <GitHub/> : <></>}
                {twitter ? <Twitter/> : <></>}
                {linkedin ? <LinkedIn/> : <></>}
                {email ? <Email/> : <></>}
                <Alert/>
            </div>
        </IconContext.Provider>
    )
}
