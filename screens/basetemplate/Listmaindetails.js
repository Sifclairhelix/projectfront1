/**
|--------------------------------------------------
| Change structure of import, this will have stuff which is the details in the form
|--------------------------------------------------
*/
import React from "react";
import {
	Scroll,
	Dimensions,
	StyleSheet,
	Text,
	ScrollView,
	TextInput,
} from "react-native";

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

const Listmaindetails = (props) => {
	return (
		<TextInput
			style={styles.input}
			placeholder={props.placeholder}
			name={props.name}
			id={props.id}
			value={props.value}
			autoCorrect={props.autoCorrect}
			onChangeText={props.onChangeText}
			onFocus={props.onFocus}
			secureTextEntry={props.secureTextEntry}
			keyboardType={props.keyboardType}
		></TextInput>
	);
};

/**
|--------------------------------------------------
| The stylesheet goes here but we need to change the variables and stuff later
|--------------------------------------------------
*/

const styles = StyleSheet.create({
	// container: {
	// 	marginTop: 30,
	// 	marginBottom: 400,
	// 	width: width,
	// 	justifyContent: "center",
	// 	alignContent: "center",
	// },
	input: {
		width: "80%",
		height: 60,
		backgroundColor: "grey",
		margin: 10,
		borderRadius: 20,
		padding: 20,
		borderWidth: 2,
		borderColor: "black",
	},
	// title: {
	// 	fontSize: 30,
	// },
});

export default Listmaindetails;
