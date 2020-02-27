import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
	const openMenu = () => {
		navigation.openDrawer();
	};
	return (
		<ImageBackground style={styles.header}>
			<MaterialIcons
				name="menu"
				size={28}
				style={styles.icon}
				onPress={openMenu}
			/>
			<View style={styles.headerTitle}>
				<Image
					source={require("../assets/heart_logo.png")}
					style={styles.headerImage}
				/>
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</ImageBackground>
	);
}
const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	headerText: {
		fontSize: 20,
		color: "#fff",
		padding: 15
	},
	headerImage: {
		width: 26,
		height: 26
	},
	headerTitle: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 15
	},
	icon: {
		color: "#ddd"
	}
});
