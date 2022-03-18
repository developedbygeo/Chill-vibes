import styled, { css } from 'styled-components';

import { buttonInteract } from '../../utils/mixins';

import { BaseProps } from '../../utils/models/props.model';

const commonBtnStyling = css`
    letter-spacing: 0.125rem;
    text-align: center;
    max-width: 100%;
    padding: 2rem 4rem;
    max-width: 30rem;
    min-width: 2rem;
    min-height: 2rem;
    border: none;
    outline: none;
    background: none;
    color: ${({ theme }) => theme.colors.light};
    &:active {
        transform: scale(1.025);
    }
`;

export const CtaButton = styled.button<BaseProps>`
    ${commonBtnStyling};
    ${buttonInteract};
    color: ${({ theme }) => theme.colors.light};
    font-weight: 700;
    border-radius: 0.15rem;
    background: transparent;
    transition: all 200ms ease-in-out;
`;

export const SecondaryButton = styled.button<BaseProps>`
    ${commonBtnStyling};
    ${buttonInteract};
    background: ${({ theme }) => theme.colors.dark};
    padding: 3rem 5rem;
    background: rgba(${({ theme }) => theme.colors.lightRGB}, 0.05);
    svg {
        transform: scale(1.8);
    }
    .small-icon {
        transform: scale(2.5);
    }
`;
