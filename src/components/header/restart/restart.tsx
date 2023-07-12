import React from "react";
import './restart.scss';
import restartIcon from '../../../assests/media/restart.svg';

export const Restart: React.FC = () => {
    return(
        <div className="restart">
            <img alt="" src={restartIcon} className="restart__icon" />
        </div>
    )
}