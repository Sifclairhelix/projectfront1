/**
|--------------------------------------------------
| Change structure of import, this will have stuff which is the details in the form, this is basically the template for the order online page
|--------------------------------------------------
*/
import React from "react";
import { Scroll, Dimensions, StyleSheet, Text, ScrollView } from "react-native";

/**
|--------------------------------------------------
| need dimensions of the window
|--------------------------------------------------
*/

var { width, height } = Dimensions.get("window");

/**
|--------------------------------------------------
| you cant add styles to container instead you add contentContainerStyle
|--------------------------------------------------
*/

const ListContainer = () => {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>{props.title}</Text>
			{props.children}
		</ScrollView>
	);
};

/**
|--------------------------------------------------
| The stylesheet goes here but we need to change it later
|--------------------------------------------------
*/

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		marginBottom: 400,
		width: width,
		justifyContent: "center",
		alignContent: "center",
	},
	title: {
		fontSize: 30,
	},
});

export default ListContainer;
