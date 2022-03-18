import { SecondaryButton } from '../shared/Button.styled';
import { MdArrowBackIos, MdArrowForwardIos, MdPause, MdPlayArrow } from 'react-icons/md';

const Controls = () => {
    return (
        <div className="controls">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" name="song-duration" id="time" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <SecondaryButton>
                    <MdArrowBackIos />
                </SecondaryButton>
                <SecondaryButton>
                    <MdPlayArrow className="small-icon" />
                </SecondaryButton>
                <SecondaryButton>
                    <MdArrowForwardIos />
                </SecondaryButton>
            </div>
        </div>
    );
};

export default Controls;
