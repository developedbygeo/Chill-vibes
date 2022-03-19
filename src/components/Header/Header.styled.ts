import styled from 'styled-components';

import { flexMixin } from '../../utils/mixins';

const StyledHeader = styled.header`
    & > nav {
        width: 95%;
        height: 100%;
        margin: auto;
        ${flexMixin('space-between', 'flex-end', 'row')};
    }
    & > container {
        height: 50%;
    }
    h1 {
        padding: 1rem 0rem;
    }
`;

export default StyledHeader;
