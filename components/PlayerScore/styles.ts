import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  playerScoreContainer: {
    alignItems: "center",
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  yourTurnText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
  highlightedScoreText: {
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 5,
    padding: 5,
  },
});
