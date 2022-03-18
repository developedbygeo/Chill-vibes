import { css } from 'styled-components';

export const gridMixin = (columns: string, rows: string, gap?: string) => css`
    display: grid;
    grid-template-columns: ${columns};
    grid-template-rows: ${rows};
    gap: ${gap};
`;

export const flexMixin = (justify: string, align: string, direction: string) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
`;

export const maxContainer = css`
    height: 100%;
    width: 100%;
`;

export const buttonInteract = css`
    transition: all 100ms ease-in-out;
    position: relative;
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.brand};
            transform: scale(1.05);
            box-shadow: 0px 0px 23px -10px rgba(${({ theme }) => theme.colors.lightRGB}, 0.25);
        }
    }
    &:active {
        transform: scale(1.1);
        box-shadow: inset 0px 0px 28px 5px rgba(0, 0, 0, 0.35);
    }
`;

export const customContainer = (h: string, w: string) => css`
    height: ${h}%;
    width: ${w}%;
`;

export const resetDefaults = css`
    border: none;
    outline: none;
    background: transparent;
`;
