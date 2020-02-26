import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createStackNavigator();

function HomeStack() {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#f4511e"
				},
				headerTintColor: "#fff"
			}}
		>
			<Stack.Screen
				name="Home"
				component={Home}
				options={({ navigation }) => {
					return {
						headerTitle: () => (
							<Header navigation={navigation} title="Home" />
						)
					};
				}}
			/>
			<Stack.Screen
				name="ReviewDetails"
				component={ReviewDetails}
				options={{
					title: "Reviews"
				}}
			/>
		</Stack.Navigator>
	);
}
export default HomeStack;
