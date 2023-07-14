import React from 'react';
import './game.scss';

export const Game: React.FC = () => {
    return(
        <div className="game">
            <div className="game__container">
                <span className="game__term">2 + 2 = ?</span>
                <div className="game__variants">
                    <div className="game__variants-variant">
                        <span>2</span>
                        <div />
                    </div>
                    <div className="game__variants-variant">
                        <span>3</span>
                        <div />
                    </div>
                    <div className="game__variants-variant">
                        <span>4</span>
                        <div />
                    </div>
                </div>
            </div>
        </div>
    )
}