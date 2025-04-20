import React from "react";
import { styles } from "@/components/PlayerScore/styles";
import { Text, View, Animated } from "react-native";
import { useEffect, useRef } from "react";

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
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isCurrentPlayer) {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.05,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [isCurrentPlayer]);

  return (
    <Animated.View
      style={[
        styles.playerScoreContainer,
        isCurrentPlayer && styles.activePlayerScoreContainer,
        { transform: [{ scale: scaleAnim }] },
      ]}
    >
      <Text style={styles.scoreText}>
        Player {player === "X" ? "❌" : "🟢"}: {score}
      </Text>
      {isCurrentPlayer && <Text style={styles.yourTurnText}>Your turn</Text>}
    </Animated.View>
  );
}
