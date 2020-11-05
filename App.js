import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();

const PolicyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Policy</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}></Button>
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
      <Text>HomeScreen</Text>

      <Button
        title="Results"
        onPress={() => navigation.navigate("Results")}
      ></Button>
      <Button
        title="Request"
        onPress={() => navigation.navigate("Request")}
      ></Button>
      <Button
        title="Policy"
        onPress={() => navigation.navigate("Policy")}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Request" component={RequestScreen} />
        <Tab.Screen name="Policy" component={PolicyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
