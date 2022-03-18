import Header from './components/Header/Header';
import Controls from './components/Player/Controls';
import Player from './components/Player/Player';
import GlobalStyle from './utils/globalStyle';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>
                <Player />
                <Controls />
            </main>
        </>
    );
}

export default App;
