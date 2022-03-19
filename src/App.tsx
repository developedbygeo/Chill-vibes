import { useRef, Suspense } from 'react';
import Header from './components/Header/Header';
import Audio from './components/Player/Audio';
import Controls from './components/Player/Controls';
import Player from './components/Player/Details';
import Library from './components/Library/Library';
import GlobalStyle from './utils/globalStyle';

function App() {
    const audioRef = useRef<HTMLAudioElement>(null);

    return (
        <>
            <GlobalStyle />
            <Header />
            <main>
                <Player />
                <Controls audioRef={audioRef} />
            </main>
            <Library audioRef={audioRef} />
            <Audio ref={audioRef} />
        </>
    );
}

export default App;
