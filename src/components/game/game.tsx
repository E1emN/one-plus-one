import { useEffect } from 'react';
import './game.scss';
import { useUnit } from 'effector-react';
import { gameStarted, $currentExpression, userChose } from '../../model/game';

export const Game = () => {

    const currentExpression = useUnit($currentExpression);

    useEffect(() => {
        gameStarted()
    }, []); // vremenno

    return(
        <div className="game">
            <div className="game__container">
                <span className="game__term">{currentExpression} = ?</span>
                <div className="game__variants">
                    <div className="game__variants-variant" onClick={() => userChose(2)}>
                        <span>2</span>
                        <div />
                    </div>
                    <div className="game__variants-variant" onClick={() => userChose(3)}>
                        <span>3</span>
                        <div />
                    </div>
                    <div className="game__variants-variant" onClick={() => userChose(4)}>
                        <span>4</span>
                        <div />
                    </div>
                </div>
            </div>
        </div>
    )
}