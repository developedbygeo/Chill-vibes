import styled from 'styled-components';

import { flexMixin } from '../../utils/mixins';

const StyledHeader = styled.header`
    & > nav {
        width: 95%;
        height: 100%;
        margin: auto;
        ${flexMixin('space-between', 'center', 'row')};
    }
    & > container {
        height: 50%;
    }
    h1 {
        padding: 1rem 0rem;
    }
    @media screen and (max-width: 480px) {
        button {
            padding: 1rem 3rem;
        }
    }
`;

export default StyledHeader;
