import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LoadAssets } from "./assets/components";
import { Button } from "./assets/components";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Request" component={RequestScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
      <Stack.Screen name="Policy" component={PolicyScreen} />
    </Stack.Navigator>
  );
};

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SFProText-Bold.ttf"),
  "SFProText-Regular": require("./assets/fonts/SFProText-Regular.ttf"),
  "SFProText-Semibold": require("./assets/fonts/SFProText-Semibold.ttf"),
};

const PolicyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Policy</Text>
      <Button
        label="Go back"
        variant="primary"
        title="Go back"
        onPress={() => navigation.goBack()}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
};

const RequestScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Request</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}></Button>
      <StatusBar style="auto" />
    </View>
  );
};

const ResultsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Results</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}></Button>
      <StatusBar style="auto" />
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <Button
        label="Policy"
        variant="primary"
        onPress={() => navigation.navigate("Policy")}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Request" component={RequestScreen} />
      <Tab.Screen name="Policy" component={PolicyScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <StackNavigator />
    </LoadAssets>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontFamily: "SFProText-Regular",
  },
});
