import { StyleSheet } from "react-native";

const activePurple = "#9933FF";

export const styles = StyleSheet.create({
  statusContainer: {
    alignItems: "center",
    minHeight: 100,
    justifyContent: "center",
    marginTop: 20,
  },
  gameOverText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 16,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  resetButton: {
    backgroundColor: activePurple,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
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
  resetButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
