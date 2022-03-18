import { keyframes } from 'styled-components';

export const houdini = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;

export const spinning = keyframes`
from{
    transform: rotate(0deg)
}to{
    transform: rotate(360deg);
}
`;
