import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Details = () => {
  return (
    <View style={styles.container}>
      <ScrollView></ScrollView>
    </View>
  );
};

export default Details;
