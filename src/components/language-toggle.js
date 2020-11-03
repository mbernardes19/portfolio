import IconButton from '@material-ui/core/IconButton';
import loadable from '@loadable/component'
import React from 'react';
import lang from '../content/language'
const ReactCountryFlag = loadable(() => import('react-country-flag'));

export default function LanguageToggle({ setCurrentLanguage }) {
    return (
        <div style={{position: 'absolute', right: 0,display: 'flex', flexFlow: 'column wrap', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <IconButton 
                onClick={() => setCurrentLanguage(lang.en)}
                style={{padding: '.4rem .3rem 0rem .3rem'}}
            >
            
                <ReactCountryFlag countryCode="US" svg />
            </IconButton>
            <IconButton
                onClick={() => setCurrentLanguage(lang.ptBr)}
                style={{padding: '.4rem .3rem 0rem .3rem'}}
            >
                <ReactCountryFlag countryCode="BR" svg />
            </IconButton>

        </div>
    );
}