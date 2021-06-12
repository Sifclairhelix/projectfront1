import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	Text,
	Dimensions,
	Image,
	Button,
} from "react-native";

/**
|--------------------------------------------------
| Dimensions required for the window 
|--------------------------------------------------
*/

var { width, height } = Dimensions.get("window");
/**
 * connect with reducx
 */
import { connect } from "react-redux";
/**
 * import actions from redux actions folder
 */
import * as actions from "../../src/actions/listcartactions";

const MainProductcard = (props) => {
	/**
    |--------------------------------------------------
    | pass all props into variables
    | variable names are assocaited to the database/filename so changing them affects entire document
    |--------------------------------------------------
    */
	/**
   |--------------------------------------------------
   | Need to import brand for the name of the shop for product and keep a eye on countInStock if it changes name
   |--------------------------------------------------
   */

	const { name, price, image, brand, countInStock } = props;

	return (
		<View style={styles.homeScreenProContainer}>
			
			<Image
				/**
                |--------------------------------------------------
                <View> Got to change the styles later 300421(1)
                | Turnary operator included
                |--------------------------------------------------
                */
				resizeMode="contain"
				style={styles.imageStructure}
				source={{
					uri: image
						? image
						: "https://base.imgix.net/files/base/ebm/mhlnews/image/2019/03/mhlnews_4187_out_stock_1.png?auto=format&fit=crop&h=432&w=768",
				}}
			/>
			<View style={styles.homeScreenCard} />
			<Text style={styles.homeScreenTitle}>
				{name.length > 15 ? name.substring(0, 16 - 3) + "..." : name}
			</Text>
			<Text style={styles.homeScreenPrice}>£{price}</Text>
			<Text style={styles.homeScreenBrand}>{brand}</Text>
			{countInStock > 0 ? (
				<View
					/**
                |--------------------------------------------------
                | keep an eye out for the countInStock it acts weird from time to time
                |--------------------------------------------------
                */ style={{
						marginBottom: 60,
					}}
				>
					<Button
						title={" ✔ Select"}
						color={"grey"}
						touchSoundDisabled={false}
						onPress={() => {
							props.addItemToList(props);
						}}
					/>
				</View>
			) : (
				<Text style={{ marginTop: 20 }}>Not in stock right now!</Text>
			)}
		</View>
	);
};

/**
|--------------------------------------------------
| dispatch redux functions
| function goes to button above line 76	
|--------------------------------------------------
*/


const mapDispatchToProps = (dispatch) => {
	return {
		addItemToList: (item) => dispatch(actions.addToList({ quantity: 1, item })),
	};
};

/**
|--------------------------------------------------
| Add stylesheet over here
| Got to change later, might not be consistent 300421(1)   
|--------------------------------------------------
*/

const styles = StyleSheet.create({
	homeScreenProContainer: {
		width: width / 2 - 10,
		height: width / 1.6,
		padding: 8,
		borderRadius: 10,
		marginTop: 55,
		marginBottom: 5,
		marginLeft: 5,
		alignItems: "center",
		elevation: 10,
		backgroundColor: "white",
	},
	imageStructure: {
		borderRadius: 60,
		width: width / 2 - 20 - 3,
		height: width / 2 - 20 - 20,
		backgroundColor: "transparent",
		position: "absolute",
		top: -40,
	},
	homeScreenCard: {
		// marginBottom: 12,
		height: width / 2 - 20 - 100,
		backgroundColor: "transparent",
		width: width / 2 - 20 - 10,
	},
	homeScreenTitle: {
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
	},
	homeScreenBrand: {
		fontSize: 15,
		textAlign: "center",
		marginBottom: 10,
		marginTop: 10,
		color: "#6905ff",
	},
	homeScreenPrice: {
		fontSize: 18,
		color: "black",
		marginTop: 10,
	},
});

export default connect(null, mapDispatchToProps)(MainProductcard);


