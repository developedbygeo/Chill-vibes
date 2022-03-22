import React from 'react';
import StyledInputWrapper from './CustomSlider.styled';

type CustomSliderProps = {
    max: number;
    value: number;
    progress: number;
    gradient: string[];
    onChange: (e: React.SyntheticEvent) => void;
};

const CustomSlider = ({ max, value, progress, gradient, onChange }: CustomSliderProps) => {
    const adjustedProgress = progress + 0.25;

    return (
        <StyledInputWrapper style={{ background: `linear-gradient(to right, ${gradient[0]}, ${gradient[1]})` }}>
            <input min={0} max={max} value={value} onChange={onChange} type="range" name="song-duration" id="time" />
            <div style={{ transform: `translateX(${adjustedProgress}%)` }} className="animated-track"></div>
        </StyledInputWrapper>
    );
};

export default CustomSlider;
