import styled, { css } from 'styled-components';

import { buttonInteract, flexMixin } from '../../utils/mixins';
import { BaseProps } from '../../utils/models/props.model';

type CtaProps = {
    readonly includesSVG: boolean;
} & BaseProps;

const commonBtnStyling = css`
    letter-spacing: 0.125rem;
    text-align: center;
    max-width: 100%;
    padding: 2rem 4rem;
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
    ${buttonInteract};
    color: ${({ theme }) => theme.colors.light};
    background: ${({ theme }) => theme.colors.lowerDark};
    font-weight: 700;
    transition: all 200ms ease-in-out;
    ${getCtaStyling};
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
