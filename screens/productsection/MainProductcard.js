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
		<View style={styles.container}>
			{/* <Text>Main Product Card</Text> */}
			<Image
				/**
                |--------------------------------------------------
                <View> Got to change the styles later 300421(1)
                | Turnary operator included
                |--------------------------------------------------
                */
				resizeMode="contain"
				style={styles.image}
				source={{
					uri: image
						? image
						: "https://base.imgix.net/files/base/ebm/mhlnews/image/2019/03/mhlnews_4187_out_stock_1.png?auto=format&fit=crop&h=432&w=768",
				}}
			/>
			<View style={styles.card} />
			<Text style={styles.title}>
				{name.length > 15 ? name.substring(0, 16 - 3) + "..." : name}
			</Text>
			<Text style={styles.price}>£{price}</Text>
			<Text>{brand}</Text>
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
/**
|--------------------------------------------------
| In the
|		addItemToList: (item) => { and should 'product' be passed into it
|					dispatch(actions.addToList({ quantity: 1, item })); should 'item' be 'product' i am not sure
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| const mapToDispatchToProps = (dispatch) => {
|		return {
|			addItemToCart: (product) => 
|				dispatch(actions.addToCart({quantity: 1, product}))
|		}
|	}
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
	container: {
		width: width / 2 - 20,
		height: width / 1.7,
		padding: 10,
		borderRadius: 10,
		marginTop: 55,
		marginBottom: 5,
		marginLeft: 10,
		alignItems: "center",
		elevation: 8,
		backgroundColor: "white",
	},
	image: {
		width: width / 2 - 20 - 10,
		height: width / 2 - 20 - 30,
		backgroundColor: "transparent",
		position: "absolute",
		top: -45,
	},
	card: {
		marginBottom: 10,
		height: width / 2 - 20 - 90,
		backgroundColor: "transparent",
		width: width / 2 - 20 - 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: 14,
		textAlign: "center",
	},
	price: {
		fontSize: 20,
		color: "black",
		marginTop: 10,
	},
});

export default connect(null, mapDispatchToProps)(MainProductcard);

//MainProductcard;
