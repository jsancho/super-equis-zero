import { StyleSheet } from "react-native";

const darkPurple = "#660099";
const lightPurple = "#9900CC";
const activePurple = "#9933FF"; // A darker, more distinct purple

export const styles = StyleSheet.create({
  playerScoreContainer: {
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    backgroundColor: darkPurple,
    minWidth: 120,
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Android elevation
    elevation: 8,
  },
  activePlayerScoreContainer: {
    backgroundColor: activePurple,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    transform: [{ scale: 1.05 }],
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  yourTurnText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
    marginTop: 4,
    textTransform: "uppercase",
    letterSpacing: 1,
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
