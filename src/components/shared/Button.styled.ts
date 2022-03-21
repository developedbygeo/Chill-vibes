import styled, { css } from 'styled-components';

import { flexMixin } from '../../utils/mixins';
import { buttonAnimation } from '../../utils/buttonAnimation';
import { BaseProps } from '../../utils/models/props.model';

type CtaProps = {
    readonly includesSVG: boolean;
} & BaseProps;

const commonBtnStyling = css`
    letter-spacing: 0.125rem;
    text-align: center;
    max-width: 100%;
    padding: 1.5rem 4rem;
    max-width: 30rem;
    height: 100%;
    min-width: 2rem;
    min-height: 2rem;
    border: none;
    outline: none;
    background: none;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.light};
`;

const includesSVGStyling = css`
    ${flexMixin('center', 'center', 'row')};
    gap: 1rem;
`;

const getCtaStyling = ({ includesSVG }: CtaProps) => {
    if (includesSVG) return includesSVGStyling;
};

export const CtaButton = styled.button<CtaProps>`
    ${commonBtnStyling};
    color: ${({ theme }) => theme.colors.light};
    background: rgba(${({ theme }) => theme.colors.lightRGB}, 0.05);
    font-weight: 700;
    transition: all 200ms ease-in-out;
    ${getCtaStyling};
    ${buttonAnimation};
`;

export const SecondaryButton = styled.button<BaseProps>`
    ${commonBtnStyling};
    background: ${({ theme }) => theme.colors.dark};
    padding: 3rem 5rem;
    background: rgba(${({ theme }) => theme.colors.lightRGB}, 0.05);
    ${buttonAnimation};
    ${flexMixin('center', 'center', 'column')};
    @media (hover: hover) {
        &.play:hover {
            color: ${({ theme }) => theme.colors.greenCta};
        }
        &.pause:hover {
            color: ${({ theme }) => theme.colors.brand};
        }
    }
    svg {
        transform: scale(1.8);
    }
    .small-icon {
        transform: scale(2.5);
    }
`;

export const UtilityButton = styled.button<BaseProps>`
    ${commonBtnStyling}
    ${buttonAnimation};
    background: none;
    height: auto;
    border-radius: 50%;
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.colors.light};
    svg {
        transform: scale(2.25);
    }
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.brand};
        }
    }
`;
