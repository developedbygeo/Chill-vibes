import styled from 'styled-components';

import { flexMixin, gridMixin, maxContainer } from '../../utils/mixins';

const StyledLibrary = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 30rem;
    height: 100%;
    box-shadow: 2px 2px 50px rgba(241, 245, 249, 0.05);
    background: ${({ theme }) => theme.colors.mid};
    ${gridMixin('1fr', '0.2fr 1fr')};
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: rgba(241, 245, 249, 0.2) transparent;
    transform: translateX(-100%);
    transition: all 0.35s ease-in-out;
    opacity: 0;
    &.visible {
        transform: translateX(0%);
        opacity: 1;
    }
    h2 {
        padding: 2rem;
    }

    ul {
        ${flexMixin('space-around', 'flex-start', 'column')};
        ${maxContainer};
        gap: 0.5rem;
    }

    li {
        ${flexMixin('space-between', 'flex-start', 'column')};
        height: auto;
        gap: 2rem;
        padding: 2rem;
        cursor: pointer;
        transition: all 100ms ease;
        & > img {
            width: 50%;
        }
        p {
            margin-top: 0.5rem;
            font-weight: 300;
            font-size: 1.6rem;
        }
        h4 {
            font-weight: 500;
        }
        @media (hover: hover) {
            &:not(.playing):hover {
                background: rgba(${({ theme }) => theme.colors.lightRGB}, 0.025);
            }
        }
    }

    .divider {
        width: 90%;
        margin: auto;
        height: 1px;
        background: ${({ theme }) => theme.colors.lowerDark};
    }

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(241, 245, 249, 0.2);
        border-radius: 20px;
        border: transparent;
    }
    .playing {
        background: ${({ theme }) => theme.colors.lowerDark};
    }
`;

export default StyledLibrary;
