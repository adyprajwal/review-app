import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";

const Stack = createStackNavigator();

function AboutStack() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="About"
				component={About}
				options={{
					title: "About",
					headerStyle: { backgroundColor: "#eee" },
					headerTintColor: "#444"
				}}
			/>
		</Stack.Navigator>
	);
}
export default AboutStack;
