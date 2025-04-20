import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";
type Player = "X" | "O";

interface GameStatusProps {
  winner: Player | "draw" | null;
  currentPlayer: Player;
  onReset: () => void;
}

export function GameStatus({ winner, onReset }: GameStatusProps) {
  return (
    <View style={styles.statusContainer}>
      {winner && (
        <>
          <Text style={styles.gameOverText}>
            {winner === "draw" ? "It's a draw!" : `Player ${winner} wins!`}
          </Text>
          <TouchableOpacity style={styles.resetButton} onPress={onReset}>
            <Text style={styles.resetButtonText}>Play Again</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
