import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

function HomeStack() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					title: "Home",
					headerStyle: { backgroundColor: "#eee" },
					headerTintColor: "#444"
				}}
			/>
			<Stack.Screen
				name="ReviewDetails"
				component={ReviewDetails}
				options={{
					title: "Reviews",
					headerStyle: { backgroundColor: "#eee" }
				}}
			/>
		</Stack.Navigator>
	);
}
export default HomeStack;
