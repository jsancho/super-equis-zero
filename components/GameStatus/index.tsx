import { TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { gameStyles } from "@/components/GameBoard/styles";
import React from "react";
import { styles } from "./styles";
type Player = "X" | "O";

interface GameStatusProps {
  winner: Player | "draw" | null;
  currentPlayer: Player;
  onReset: () => void;
}

export function GameStatus({
  winner,
  currentPlayer,
  onReset,
}: GameStatusProps) {
  return (
    <ThemedView style={styles.statusContainer}>
      {winner && (
        <>
          <ThemedText style={styles.gameOverText}>
            {winner === "draw" ? "It's a draw!" : `Player ${winner} wins!`}
          </ThemedText>
          <TouchableOpacity style={styles.resetButton} onPress={onReset}>
            <ThemedText style={styles.resetButtonText}>Play Again</ThemedText>
          </TouchableOpacity>
        </>
      )}

      {!winner && (
        <ThemedText style={gameStyles.currentPlayer}>
          Current Player: {currentPlayer === "X" ? "❌" : "🟢"}
        </ThemedText>
      )}
    </ThemedView>
  );
}
