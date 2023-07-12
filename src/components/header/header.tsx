import React from 'react';
import './header.scss';
import { Pause } from './pause/pause';
import { Restart } from './restart/restart';

export const Header: React.FC = () => {
 
    return(
        <header className='header'>
            <div className="header__container">
                <Pause />
                <span className='header__points'>12</span>
                <Restart />
            </div>
        </header>
    )
};