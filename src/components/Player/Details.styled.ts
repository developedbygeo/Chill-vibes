import styled from 'styled-components';

import { devices } from '../../utils/breakpoints';
import { flexMixin, signatureShadow } from '../../utils/mixins';
import { spinning } from '../../utils/animations';

const StyledDetails = styled.section`
    min-height: 60vh;
    ${flexMixin('center', 'center', 'column')};
    gap: 1.5rem;
    & > .image-container {
        width: 75%;
        max-width: 50vh;
        position: relative;
        img {
            width: 100%;
            border-radius: 50%;
            transition: all 2s linear;
            ${signatureShadow};
        }
        .inner {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
            background: ${({ theme }) => theme.colors.dark};
        }
    }
    & > h2 {
        padding: 3rem 1rem 1rem 1rem;
    }
    & > h3 {
        font-size: 2.4rem;
        letter-spacing: 0.15rem;
        font-weight: 300;
    }

    .rotate {
        animation: 15s ${spinning} linear infinite;
    }
    @media ${devices.landscapeMobileSS} {
        gap: 0.5rem;
    }
`;

export default StyledDetails;
