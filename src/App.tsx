import Header from './components/Header/Header';
import Controls from './components/Player/Controls';
import Player from './components/Player/Details';
import Library from './components/Library/Library';
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
            <Library />
        </>
    );
}

export default App;
