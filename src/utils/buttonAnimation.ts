import { css } from 'styled-components';

import { signatureShadow } from './mixins';

export const buttonAnimation = css`
    & {
        ${signatureShadow};
        border-bottom: 4px solid rgba(${({ theme }) => theme.colors.gray}, 0.1);
        @media (hover: hover) {
            &:hover {
                box-shadow: 0px 15px 25px -5px rgba(${({ theme }) => theme.colors.eerieBlack}, 0.4);
                transform: scale(1.03);
            }
        }
        &:active {
            box-shadow: 0px 4px 8px rgba(${({ theme }) => theme.colors.eerieBlack}, 0.75);
            transform: scale(0.98);
        }
    }
`;
