/**
|--------------------------------------------------
| Safeare view for the top so that it doesnt affect other stuff
|--------------------------------------------------
*/
import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";

const Topheader = () => {
	return (
		<SafeAreaView style={styles.logoHeader}>
			
			<Image 
				source={require("../../assets/imageicons/logo.png")}
				resizeMode="cover"
				style={styles.imageSize }
			/>
		</SafeAreaView>
	);
};



const styles = StyleSheet.create({
	logoHeader: {
		marginTop: 1,
		width: "100%",
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "center",
		padding: 16,
	},
	imageSize: {
		height: 100,
		width: 150,
		borderRadius: 6,
	},
});

export default Topheader;
