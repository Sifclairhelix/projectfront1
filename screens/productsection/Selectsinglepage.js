import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	Button,
	ScrollView,
} from "react-native";
import { Container, H1, Right, Left } from "native-base";

/**
|--------------------------------------------------
| Import redux from store
|--------------------------------------------------
*/
import { connect } from "react-redux";
import * as actions from "../../src/actions/listcartactions";

/**
|--------------------------------------------------
| This is for rendering the single items which will be passed from MainProductContainer 
|--------------------------------------------------
*/

const Selectsinglepage = (props) => {
	/**
	 * UseState section
	 */

	const [itemId, setItemId] = useState(props.route.params.item);
	const [checkAvailable, setCheckAvailable] = useState(null);

	return (
		<Container style={styles.container}>
			<ScrollView style={{ marginBottom: 80, padding: 5 }}>
				<View>
					<Image
						/**
                        |--------------------------------------------------
                        | itemId gets passed for all of them causes for example should be itemId.name, itemId.image, etc.
                        |--------------------------------------------------
                        */
						source={{
							uri: itemId.image
								? itemId.image
								: "https://base.imgix.net/files/base/ebm/mhlnews/image/2019/03/mhlnews_4187_out_stock_1.png?auto=format&fit=crop&h=432&w=768",
						}}
						resizeMode="contain"
						style={styles.image}
					/>
				</View>

				<View style={styles.contentContainer}>
					<H1 style={styles.contentHeader}>{itemId.name}</H1>
					<Text style={styles.contentText}>{itemId.brand}</Text>
				</View>
				{/**
                |--------------------------------------------------
                | Important we need to add additional stuff and have to change a lot of stuff on this page
                |--------------------------------------------------
                */}
			</ScrollView>

			<View style={styles.bottomContainer}>
				<Left>
					<Text style={styles.price}>£{itemId.price}</Text>
				</Left>
				<Right>
					<Button title="Select" onPress={() => props.addItemToList(itemId)} />
				</Right>
			</View>
		</Container>
	);
};

/**
|--------------------------------------------------
| Section for redux function to add the item
| passing functionality to button in line 70  
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
		addItemToList: (item) => {
			dispatch(actions.addToList({ quantity: 1, item }));
		},
	};
};

/**
|--------------------------------------------------
| Change the style sheet later which has been created
|--------------------------------------------------
*/

const styles = StyleSheet.create({
	container: {
		position: "relative",
		height: "100%",
	},
	imageContainer: {
		backgroundColor: "white",
		padding: 0,
		margin: 0,
	},
	image: {
		width: "100%",
		height: 250,
	},
	contentContainer: {
		marginTop: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	contentHeader: {
		fontWeight: "bold",
		marginBottom: 20,
	},
	contentText: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 20,
	},
	bottomContainer: {
		flexDirection: "row",
		position: "absolute",
		bottom: 0,
		left: 0,
		backgroundColor: "white",
	},
	price: {
		fontSize: 24,
		margin: 20,
		color: "red",
	},
});

export default connect(null, mapDispatchToProps)(Selectsinglepage);

//Selectsinglepage;
