import { css } from 'styled-components';

export const signatureShadow = css`
    box-shadow: 0px 5px 10px rgba(${({ theme }) => theme.colors.eerieBlack}, 0.9);
`;

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
export const underlineEffect = css`
    @media (hover: hover) {
        &::after {
            position: absolute;
            content: '';
            left: 0;
            right: 0;
            bottom: 0px;
            width: 100%;
            height: 0.75px;
            transform-origin: right;
            transform: scaleX(0);
            background: ${({ theme }) => theme.colors.light};
            transition: transform 350ms ease;
        }
        @media (hover: hover) {
            &:hover {
                &::after {
                    transform-origin: left;
                    transform: scaleX(1);
                }
            }
        }
    }
`;

export const maxContainer = css`
    height: 100%;
    width: 100%;
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
