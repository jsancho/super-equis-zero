import { StyleSheet } from "react-native";

const darkPurple = "#6600CC";
const lightPurple = "#9900FF";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: darkPurple,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  board: {
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
  },
  square: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: lightPurple,
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    // Android elevation
    elevation: 8,
  },
  squareText: {
    fontSize: 60,
    fontWeight: "bold",
  },
});
