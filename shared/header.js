import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
	const openMenu = () => {
		navigation.openDrawer();
	};
	return (
		<View style={styles.header}>
			<MaterialIcons
				name="menu"
				size={28}
				style={styles.icon}
				onPress={openMenu}
			/>
			<Text style={styles.headerText}>{title}</Text>
		</View>
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

	icon: {
		color: "#ddd"
	}
});
