import React from "react";
import { styles } from "@/components/PlayerScore/styles";
import { Text, View } from "react-native";

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
    <View
      style={[
        styles.playerScoreContainer,
        isCurrentPlayer && styles.highlightedScoreText,
      ]}
    >
      <Text style={styles.scoreText}>
        Player {player === "X" ? "❌" : "🟢"}: {score}
      </Text>
      {isCurrentPlayer && <Text style={styles.yourTurnText}>Your turn</Text>}
    </View>
  );
}
