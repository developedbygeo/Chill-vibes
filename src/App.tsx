import { useRef, useState } from 'react';
import GlobalStyle from './utils/globalStyle';
import Header from './components/Header/Header';
import Player from './components/Player/Details';
import Controls from './components/Player/Controls';
import Library from './components/Library/Library';
import Footer from './components/Footer/Footer';

function App() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [libraryShows, setLibraryShows] = useState(false);

    const libraryToggleHandler = () => setLibraryShows((prevState) => !prevState);

    return (
        <div className={`App ${libraryShows ? 'app-active' : ''}`}>
            <GlobalStyle />
            <Header onToggleLibrary={libraryToggleHandler} />
            <main>
                <Player />
                <Controls audioRef={audioRef} />
            </main>
            <Library audioRef={audioRef} onToggleLibrary={libraryToggleHandler} isLibraryShown={libraryShows} />
            <Footer />
        </div>
    );
}

export default App;
