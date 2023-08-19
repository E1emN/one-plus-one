import './restart.scss';
import restartIcon from '../../../assests/media/restart.svg';

export const Restart = () => {
    return(
        <div className="restart">
            <img alt="" src={restartIcon} className="restart__icon" />
        </div>
    )
}