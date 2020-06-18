import IconButton from '@material-ui/core/IconButton';
import loadable from '@loadable/component'
const ReactCountryFlag = loadable(() => import('react-country-flag'));
import React from 'react';
import lang from '../content/language'

export default function LanguageToggle({ setCurrentLanguage }) {
    return (
        <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <IconButton
                onClick={() => setCurrentLanguage(lang.ptBr)}
                style={{padding: '15px 5px 5px 5px'}}
            >
                <ReactCountryFlag countryCode="BR" svg />
            </IconButton>
            <IconButton 
                onClick={() => setCurrentLanguage(lang.en)}
                style={{padding: '15px 5px 5px 5px'}}
            >
            
                <ReactCountryFlag countryCode="US" svg />
            </IconButton>
        </div>
    );
}