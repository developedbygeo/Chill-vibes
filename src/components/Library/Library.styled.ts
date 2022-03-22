import styled from 'styled-components';

import { devices } from '../../utils/breakpoints';
import { flexMixin, gridMixin, maxContainer, underlineEffect } from '../../utils/mixins';

const StyledLibrary = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    box-shadow: 2px 2px 50px rgba(241, 245, 249, 0.05);
    background: ${({ theme }) => theme.colors.mid};
    ${gridMixin('1fr', '0.1fr 0.1fr 1fr')};
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

    .aside-header {
        ${flexMixin('space-between', 'center', 'row')};
        padding: 2rem 1.5rem;
    }
    .info {
        font-weight: 300;
        padding: 2rem 1.5rem;

        p {
            line-height: 2.25vh;
        }

        span {
            position: relative;
            font-weight: 500;
            ${underlineEffect};
        }
    }

    ul {
        ${flexMixin('space-around', 'flex-start', 'column')};
        ${maxContainer};
        gap: 0.5rem;
        margin-top: 3.5vh;
    }

    li {
        ${flexMixin('space-between', 'flex-start', 'column')};
        height: auto;
        gap: 2rem;
        padding: 2rem;
        cursor: pointer;
        transition: all 250ms ease;
        & > img {
            width: 50%;
        }
        p {
            margin-top: 0.5rem;
            font-weight: 300;
            font-size: 1.8rem;
        }
        h4 {
            font-size: 2.3rem;
            font-weight: 500;
        }
        @media (hover: hover) {
            &:not(.playing):hover {
                transition: all 200ms ease;
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
    @media screen and (min-width: 320px) and (max-width: 925px) and (max-height: 450px) and (orientation: landscape) {
        width: 30vw;
        li {
            & > img {
                width: 50%;
            }
        }
    }

    @media ${devices.tablet} {
        width: 30vw;
        li {
            & > img {
                width: 25%;
            }
        }
    }
    @media ${devices.laptop} {
        li {
            & > img {
                width: 45%;
            }
        }
    }
`;

export default StyledLibrary;
