import React, { useState, useEffect } from 'react';
import './Puzzle.css'; // Import CSS for styling

const SIZE = 3; // Puzzle grid size (e.g., 3x3)

function Puzzle() {
  const [tiles, setTiles] = useState([]);
  const [emptyIndex, setEmptyIndex] = useState(SIZE * SIZE - 1);
  const [moves, setMoves] = useState(0);
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const initialTiles = Array.from({ length: SIZE * SIZE }, (_, i) => i);
    
    for (let i = initialTiles.length - 2; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initialTiles[i], initialTiles[j]] = [initialTiles[j], initialTiles[i]];
    }
    setTiles(initialTiles);
    setEmptyIndex(initialTiles.indexOf(SIZE * SIZE - 1));
    setMoves(0);
    setIsSolved(false);
  };

  const handleTileClick = (index) => {
    if (isSolved) return;

    const emptyRow = Math.floor(emptyIndex / SIZE);
    const emptyCol = emptyIndex % SIZE;
    const tileRow = Math.floor(index / SIZE);
    const tileCol = index % SIZE;

    if (
      (Math.abs(emptyRow - tileRow) === 1 && emptyCol === tileCol) ||
      (Math.abs(emptyCol - tileCol) === 1 && emptyRow === tileRow)
    ) {
      const newTiles = [...tiles];
      [newTiles[emptyIndex], newTiles[index]] = [newTiles[index], newTiles[emptyIndex]];
      setTiles(newTiles);
      setEmptyIndex(index);
      setMoves(moves + 1);

      if (isPuzzleSolved(newTiles)) {
        setIsSolved(true);
      }
    }
  };

  const isPuzzleSolved = (currentTiles) => {
    for (let i = 0; i < currentTiles.length; i++) {
      if (currentTiles[i] !== i) {
        return false;
      }
    }
    return true;
  };

  const getTileStyle = (index) => {
    if (index === emptyIndex) {
      return { visibility: 'hidden' };
    }
    return {};
  };

  return (
    <div className="puzzle-container pt-32 pb-5">
      <h2>Sliding Puzzle</h2>
      <div className="puzzle-grid" style={{ width: `${SIZE * 112}px` }}>
        {tiles.map((tile, index) => (
          <div
            key={index}
            className="puzzle-tile"
            style={getTileStyle(index)}
            onClick={() => handleTileClick(index)}
          >
            {tile !== SIZE * SIZE - 1 ? tile + 1 : ''}
          </div>
        ))}
      </div>
      <div className="game-info">
        <p>Moves: {moves}</p>
        {isSolved && <p className="success-message">Puzzle Solved!</p>}
        <button onClick={initializeGame}>Reset Puzzle</button>
      </div>
    </div>
  );
}

export default Puzzle;