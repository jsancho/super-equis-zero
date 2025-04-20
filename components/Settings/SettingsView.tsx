import Slider from "@react-native-community/slider";
import { ThemedView } from "../ThemedView";
import { styles } from "./styles";
import { Text, View } from "react-native";
import { useGameSettingsStore } from "@/stores/useGameSettingsStore";

export default function SettingsView() {
  const { boardSize, setBoardSize } = useGameSettingsStore();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.sliderContainer}>
        <Text>Game Size: {boardSize}</Text>
        <Slider
          style={styles.slider}
          value={boardSize}
          onValueChange={setBoardSize}
          minimumValue={3}
          maximumValue={6}
          step={1}
        />
      </View>
    </ThemedView>
  );
}
