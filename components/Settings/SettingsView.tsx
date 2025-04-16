import Slider from "@react-native-community/slider";
import { ThemedView } from "../ThemedView";
import { styles } from "./styles";
import { useState } from "react";
import { Text, View } from "react-native";
export default function SettingsView() {

    const [gameSize, setGameSize] = useState(3);
    return (
      <ThemedView style={styles.container}>
        <View style={styles.sliderContainer}>
            <Text>Game Size: {gameSize}</Text>
            <Slider
                style={styles.slider}
                value={gameSize}
                onValueChange={setGameSize}
                minimumValue={3}
                maximumValue={6}
                step={1}
            />
        </View>
        
      </ThemedView>
        
    );
  }