import { useRef, useState } from 'react';
import Header from './components/Header/Header';
import Controls from './components/Player/Controls';
import Player from './components/Player/Details';
import Library from './components/Library/Library';
import GlobalStyle from './utils/globalStyle';

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
        </div>
    );
}

export default App;
