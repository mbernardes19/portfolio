import React from 'react';
import './gifplayer.css'
import Gif from '../../images/dev-telegram-bot.gif';

export default function PortfolioGif() {
    return (
        <img src={Gif} style={{maxWidth: '100%', minWidth: '30%', width: '300px'}} />
    )
}