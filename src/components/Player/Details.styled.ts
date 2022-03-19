import styled from 'styled-components';

import { flexMixin } from '../../utils/mixins';
import { spinning } from '../../utils/animations';

const StyledDetails = styled.section`
    min-height: 60vh;
    ${flexMixin('center', 'center', 'column')};
    & > .image-container {
        width: 50%;
        max-width: 50vh;
        position: relative;
        img {
            width: 100%;
            border-radius: 50%;
            transition: all 2s linear;
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
        font-size: 1.8rem;
        letter-spacing: 0.15rem;
        font-weight: 300;
    }

    .rotate {
        animation: 10s ${spinning} linear infinite;
    }
`;

export default StyledDetails;
