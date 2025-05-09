import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { styles } from "@/components/GameBoard/styles";
import { useGameSettingsStore } from "@/stores/useGameSettingsStore";
import { GameStatus } from "@/components/GameStatus";
import { PlayerScore } from "@/components/PlayerScore";

type Player = "X" | "O";
type Board = (Player | null)[];

export default function GameBoardView() {
  const { width, height } = useWindowDimensions();
  const canvasSize = Math.min(width, height) * 0.9;
  const boardSize = useGameSettingsStore((state) => state.boardSize);

  const [board, setBoard] = useState<Board>(
    Array(boardSize * boardSize).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [winner, setWinner] = useState<Player | "draw" | null>(null);

  // Reset the board when boardSize changes
  useEffect(() => {
    setBoard(Array(boardSize * boardSize).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  }, [boardSize]);

  const checkWinner = (board: Board): Player | "draw" | null => {
    // Generate winning combinations for any board size
    const combinations: number[][] = [];

    // Check rows
    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col <= boardSize - boardSize; col++) {
        const combination = [];
        for (let i = 0; i < boardSize; i++) {
          combination.push(row * boardSize + col + i);
        }
        combinations.push(combination);
      }
    }

    // Check columns
    for (let col = 0; col < boardSize; col++) {
      for (let row = 0; row <= boardSize - boardSize; row++) {
        const combination = [];
        for (let i = 0; i < boardSize; i++) {
          combination.push((row + i) * boardSize + col);
        }
        combinations.push(combination);
      }
    }

    // Check diagonals
    for (let row = 0; row <= boardSize - boardSize; row++) {
      for (let col = 0; col <= boardSize - boardSize; col++) {
        // Main diagonal
        const mainDiagonal = [];
        // Anti-diagonal
        const antiDiagonal = [];
        for (let i = 0; i < boardSize; i++) {
          mainDiagonal.push((row + i) * boardSize + (col + i));
          antiDiagonal.push((row + i) * boardSize + (col + boardSize - 1 - i));
        }
        combinations.push(mainDiagonal);
        combinations.push(antiDiagonal);
      }
    }

    for (const combination of combinations) {
      const first = board[combination[0]];
      if (first && combination.every((index) => board[index] === first)) {
        return first as Player;
      }
    }

    if (!board.includes(null)) {
      return "draw";
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
      if (gameWinner !== "draw") {
        setScores((prev) => ({
          ...prev,
          [gameWinner]: prev[gameWinner] + 1,
        }));
      }
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(boardSize * boardSize).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  const renderSquare = (index: number) => (
    <TouchableOpacity
      style={[
        styles.square,
        {
          width: canvasSize / boardSize,
          height: canvasSize / boardSize,
        },
      ]}
      key={index}
      onPress={() => handlePress(index)}
    >
      <Text style={styles.squareText}>
        {board[index] === "X" ? "❌" : board[index] === "O" ? "🟢" : ""}
      </Text>
    </TouchableOpacity>
  );

  const renderBoard = () => {
    const rows = [];
    for (let i = 0; i < boardSize; i++) {
      const row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(renderSquare(i * boardSize + j));
      }
      rows.push(
        <View key={i} style={styles.row}>
          {row}
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <PlayerScore
          player="X"
          score={scores.X}
          isCurrentPlayer={currentPlayer === "X"}
        />
        <PlayerScore
          player="O"
          score={scores.O}
          isCurrentPlayer={currentPlayer === "O"}
        />
      </View>

      <View style={[styles.board, { width: canvasSize, height: canvasSize }]}>
        {renderBoard()}
      </View>

      <GameStatus
        winner={winner}
        currentPlayer={currentPlayer}
        onReset={resetGame}
      />
    </View>
  );
}
