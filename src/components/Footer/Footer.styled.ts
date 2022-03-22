import styled from 'styled-components';

import { flexMixin, underlineEffect } from '../../utils/mixins';

const StyledFooter = styled.footer`
    background: ${({ theme }) => theme.colors.secondaryDark};
    ${flexMixin('center', 'center', 'row')};
    gap: 1.5rem;
    & > p {
        position: relative;
        letter-spacing: 0.15rem;
        font-weight: 300;
        transition: all 200ms ease-in-out;
        ${underlineEffect};
        @media (hover: hover) {
            &:hover {
                color: #fff;
            }
        }
    }
    & > svg {
        font-size: 2rem;
        transition: all 700ms ease-in-out;
        @media (hover: hover) {
            &:hover {
                transform: rotate(360deg);
            }
        }
    }
`;

export default StyledFooter;
