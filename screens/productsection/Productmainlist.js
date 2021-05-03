import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from "react-native";

/**
|--------------------------------------------------
| Import from other files
|--------------------------------------------------
*/

import MainProductcard from "./MainProductcard";

/**
|--------------------------------------------------
| Dimensions of the device
|--------------------------------------------------
*/

var { width, height } = Dimensions.get("window");

const Productmainlist = (props) => {
	/**
    |--------------------------------------------------
    | Deconstruct props
    |--------------------------------------------------
    */
	const { item } = props;

	return (
		/**
        |--------------------------------------------------
        | <View>
			<Text>Product main List</Text>
		</View>
        |--------------------------------------------------
        */
		<TouchableOpacity
			/**
			|--------------------------------------------------
			| onPress event for the SelectSinglepage, the onpress section might have to be changed in Mainhomenavigator
			| we pass to Product deatail item which is the name and we pass the prop {item} = props into it
			|--------------------------------------------------
			*/
			style={{ width: "50%" }}
			onPress={() =>
				props.navigation.navigate("Product Detail", { item: item })
			}
		>
			<View /**
            |--------------------------------------------------
            | pass the MainProductcard
            |--------------------------------------------------
            */
				style={{ width: width / 2, backgroundColor: "white" }}
			>
				<MainProductcard {...item} />
			</View>
		</TouchableOpacity>
	);
};

/**
|--------------------------------------------------
| Have to add a stylesheet later
|--------------------------------------------------
*/
const styles = StyleSheet.create({
	mainstyle: {
		width: "50%",
	},
});

export default Productmainlist;
