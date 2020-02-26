import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";

const Stack = createStackNavigator();

function AboutStack() {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#f4511e"
				}
			}}
		>
			<Stack.Screen
				name="About"
				component={About}
				options={({ navigation }) => {
					return {
						headerTitle: () => (
							<Header navigation={navigation} title="About" />
						)
					};
				}}
			/>
		</Stack.Navigator>
	);
}
export default AboutStack;
