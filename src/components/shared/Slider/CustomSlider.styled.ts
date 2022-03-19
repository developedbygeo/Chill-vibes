import styled from 'styled-components';

const StyledInputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 1rem;
    border-radius: 1rem;
    overflow: hidden;

    input[type='range'] {
        width: 100%;
        padding: 1rem 0rem;
        -webkit-appearance: none;
        background: transparent;
        cursor: pointer;
        z-index: 1;
    }

    input[type='range']:focus {
        outline: none;
    }
    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 1.6rem;
        width: 1.2rem;
        background: ${({ theme }) => theme.colors.brand};
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.light};
    }
    input[type='range']::-moz-range-thumb {
        height: 1.6rem;
        width: 1.2rem;
        background: ${({ theme }) => theme.colors.brand};
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.light};
    }
    .animated-track {
        background: rgb(204, 204, 204);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(0%);
        pointer-events: none;
    }
`;

export default StyledInputWrapper;
