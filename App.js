import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import HomeStack from "./routes/homeStack";
import Navigator from "./routes/drawer";
const getFonts = () => {
	return Font.loadAsync({
		"nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
		"nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
	});
};

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	if (fontsLoaded) {
		return <Navigator />;
	} else {
		return (
			<AppLoading
				startAsync={getFonts}
				onFinish={() => setFontsLoaded(true)}
			/>
		);
	}
}
