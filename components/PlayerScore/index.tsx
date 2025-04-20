import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { styles } from "@/components/PlayerScore/styles";

type Player = "X" | "O";

interface PlayerScoreProps {
  player: Player;
  score: number;
  isCurrentPlayer: boolean;
}

export function PlayerScore({
  player,
  score,
  isCurrentPlayer,
}: PlayerScoreProps) {
  return (
    <ThemedView
      style={[
        styles.playerScoreContainer,
        isCurrentPlayer && styles.highlightedScoreText,
      ]}
    >
      <ThemedText style={styles.scoreText}>
        Player {player === "X" ? "❌" : "🟢"}: {score}
      </ThemedText>
      {isCurrentPlayer && (
        <ThemedText style={styles.yourTurnText}>Your turn</ThemedText>
      )}
    </ThemedView>
  );
}
