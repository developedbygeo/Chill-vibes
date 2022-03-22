import StyledFooter from './Footer.styled';

import { RiGithubLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <StyledFooter>
            <p>
                <a href="https://github.com/developedbygeo" target="_blank" rel="noreferrer" title="GitHub Profile">
                    developedbygeo
                </a>
            </p>

            <RiGithubLine />
        </StyledFooter>
    );
};

export default Footer;
