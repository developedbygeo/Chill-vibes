import styled from 'styled-components';

import { flexMixin } from '../../utils/mixins';

const StyledControls = styled.section`
    min-height: 20vh;
    ${flexMixin('space-between', 'center', 'column')};

    & > .time {
        width: 50%;
        display: flex;
        align-items: center;
        p {
            padding: 1rem;
        }
    }
    & > .ctrl {
        ${flexMixin('space-between', 'center', 'row')};
        width: auto;
        gap: 2rem;
        padding: 1rem;
    }
`;
export default StyledControls;
