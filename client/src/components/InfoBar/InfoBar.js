import React from 'react';
import closeIcon from '../../components/icons/closeIcon.png';
import onlineIcon from '../../components/icons/onlineIcon.png';
import '../InfoBar/InfoBar.css';

const InforBar = ({room}) => (
    <div className='infoBar'>
        <div className='leftInnerContainer'>
            <img className='onlineIcon' src={onlineIcon} alt='online' />
            <h3>{room}</h3>
        </div>
        <div className='rightInnerContainer'>
            <a href='/'><img src={closeIcon} alt='closed' /></a>
        </div>
    </div>

)

export default InforBar;
