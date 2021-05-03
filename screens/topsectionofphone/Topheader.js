/**
|--------------------------------------------------
| Safeare view for the top so that it doesnt affect other stuff
|--------------------------------------------------
*/
import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";

const Topheader = () => {
	return (
		<SafeAreaView style={styles.header}>
			{/* <Text>Top header section</Text> */}
			<Image /**
            |--------------------------------------------------
            | required for the image import at the top
            |--------------------------------------------------
            */
				source={require("../../assets/imageicons/logopro3.png")}
				resizeMode="contain"
				style={{ height: 50 }}
			/>
		</SafeAreaView>
	);
};

/**
|--------------------------------------------------
| Got to change the stylesheet late pretty important
|--------------------------------------------------
*/

const styles = StyleSheet.create({
	header: {
		marginTop: 1,
		width: "100%",
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "center",
		padding: 20,
	},
});

export default Topheader;
