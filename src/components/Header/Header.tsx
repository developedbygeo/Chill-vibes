import { BaseProps } from '../../utils/models/props.model';
import StyledHeader from './Header.styled';
import { CtaButton } from '../shared/Button.styled';
import { MdLibraryMusic } from 'react-icons/md';

const Header = ({ onToggleLibrary }: BaseProps) => {
    return (
        <StyledHeader>
            <nav>
                <div className="container">
                    <h1>Chill Vibes</h1>
                </div>
                <div className="container">
                    <CtaButton onClick={onToggleLibrary} includesSVG title="Toggle Library">
                        <span>Library</span>
                        <MdLibraryMusic />
                    </CtaButton>
                </div>
            </nav>
        </StyledHeader>
    );
};

export default Header;
