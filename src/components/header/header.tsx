import './header.scss';
import { Pause } from './pause/pause';
import { Restart } from './restart/restart';
import { useUnit } from 'effector-react';
import { $score } from '../../model/game';

export const Header = () => {

    const score = useUnit($score);
 
    return(
        <header className='header'>
            <div className="header__container">
                <Pause />
                <span className='header__points'>{score}</span>
                <Restart />
            </div>
        </header>
    )
};