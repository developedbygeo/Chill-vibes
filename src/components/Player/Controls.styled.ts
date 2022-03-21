import styled from 'styled-components';

import { devices } from '../../utils/breakpoints';
import { flexMixin } from '../../utils/mixins';

const StyledControls = styled.section`
    min-height: 20vh;
    width: 70%;
    margin: auto;
    ${flexMixin('space-around', 'center', 'column')};

    & > .time {
        width: 100%;
        display: flex;
        align-items: center;
        p {
            padding: 1rem;
        }
    }
    & > .ctrl {
        ${flexMixin('space-between', 'center', 'row')};
        width: 100%;
        gap: 2rem;
        padding: 1rem;
    }
    @media screen and (min-width: 608px) {
        & > .ctrl {
            ${flexMixin('center', 'center', 'row')};
        }
    }
    @media ${devices.tablet} {
        & > .time {
            max-width: 60vw;
        }
    }
`;
export default StyledControls;
