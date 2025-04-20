import { StyleSheet } from "react-native";

export const gameStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  board: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
  },
  square: {
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  squareText: {
    fontSize: 60,
    fontWeight: "bold",
  },
  currentPlayer: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  winnerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  winnerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
