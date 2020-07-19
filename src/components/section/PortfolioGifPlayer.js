import React from 'react';
import GifPlayer from 'react-gif-player'
import './gifplayer.css'
import Gif from '../../images/dev-telegram-bot.gif';

export default function PortfolioGifPlayer() {
    return (
        <GifPlayer gif={Gif} style={{maxWidth: '100%', minWidth: '30%', width: '300px'}} />
    )
}