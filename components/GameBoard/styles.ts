import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
});
