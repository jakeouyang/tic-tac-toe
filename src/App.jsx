import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Play 1" symbol="O"/>
          <Player initialName="Play 2" symbol="X"/>
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
