import { useAppDispatch } from '../../app/store';
import { toggleLibrary } from '../../app/uiSlice';

import StyledHeader from './Header.styled';
import { CtaButton } from '../shared/Button.styled';
import { MdLibraryMusic } from 'react-icons/md';

const Header = () => {
    const dispatch = useAppDispatch();

    const toggleLibraryHandler = () => {
        dispatch(toggleLibrary());
    };

    return (
        <StyledHeader>
            <nav>
                <div className="container">
                    <h1>Chill Vibes</h1>
                </div>
                <div className="container">
                    <CtaButton onClick={toggleLibraryHandler} includesSVG>
                        <span>Library</span>
                        <MdLibraryMusic />
                    </CtaButton>
                </div>
            </nav>
        </StyledHeader>
    );
};

export default Header;
