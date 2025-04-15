import { TouchableOpacity, Text, View, useWindowDimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { gameStyles } from '@/components/GameStyles';

type Player = 'X' | 'O';
type Board = (Player | null)[];

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const gameSize = isLandscape ? height * 0.8 : Math.min(width, height) * 0.8;
  
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [winner, setWinner] = useState<Player | 'draw' | null>(null);

  const checkWinner = (board: Board): Player | 'draw' | null => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a] as Player;
      }
    }

    if (!board.includes(null)) {
      return 'draw';
    }

    return null;
  };

  const handlePress = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      if (gameWinner !== 'draw') {
        setScores(prev => ({
          ...prev,
          [gameWinner]: prev[gameWinner] + 1
        }));
      }
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  const renderSquare = (index: number) => (
    <TouchableOpacity
      style={[
        gameStyles.square,
        {
          width: gameSize / 3,
          height: gameSize / 3,
        }
      ]}
      onPress={() => handlePress(index)}
    >
      <Text style={gameStyles.squareText}>
        {board[index] === 'X' ? '❌' : board[index] === 'O' ? '🟢' : ''}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={[
      gameStyles.container,
      isLandscape && {
        transform: [{ rotate: '90deg' }],
        width: height,
        height: width,
      }
    ]}>
      <ThemedView style={gameStyles.scoreContainer}>
        <ThemedText style={gameStyles.scoreText}>Player X: {scores.X}</ThemedText>
        <ThemedText style={gameStyles.scoreText}>Player O: {scores.O}</ThemedText>
      </ThemedView>

      {winner && (
        <ThemedView style={gameStyles.winnerContainer}>
          <ThemedText style={gameStyles.winnerText}>
            {winner === 'draw' ? "It's a draw!" : `Player ${winner} wins!`}
          </ThemedText>
          <TouchableOpacity style={gameStyles.resetButton} onPress={resetGame}>
            <ThemedText style={gameStyles.resetButtonText}>Play Again</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      )}

      <ThemedView style={[
        gameStyles.board,
        { width: gameSize, height: gameSize }
      ]}>
        <View style={gameStyles.row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={gameStyles.row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={gameStyles.row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </ThemedView>

      {!winner && (
        <ThemedText style={gameStyles.currentPlayer}>
          Current Player: {currentPlayer}
        </ThemedText>
      )}
    </ThemedView>
  );
}
